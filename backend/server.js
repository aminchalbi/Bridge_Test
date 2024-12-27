const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

// Initialisation
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Pour analyser les requêtes avec JSON
app.use('/img', express.static(path.join(__dirname, 'public', 'img'))); // Servir les fichiers du dossier public/img

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/courses')
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.error('Erreur de connexion à MongoDB:', err));


// Routes
const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes); // Enregistrement des routes pour les cours

// Gestion des fichiers avec multer (configuration)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'public', 'img')); // Dossier de destination public/img
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Utiliser un nom unique pour éviter les conflits
  }
});

const upload = multer({ storage: storage });

// Exemple d'upload de fichier pour un cours
app.post('/api/courses/add', upload.single('image'), (req, res) => {
  const { title, description, price } = req.body;
  const image = req.file ? req.file.filename : null; // Sauvegarder le nom du fichier image

  // Vous pouvez maintenant créer un document dans votre base de données MongoDB pour ce cours
  const newCourse = new mongoose.model('Course')({
   title,
    
    price,
    image, // Sauvegarder uniquement le nom du fichier image dans la base de données
  });

  newCourse.save()
    .then((course) => {
      res.status(201).json({ message: 'Cours ajouté avec succès', course });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Erreur lors de l\'ajout du cours', error });
    });
});

// Port
const PORT = 4000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
