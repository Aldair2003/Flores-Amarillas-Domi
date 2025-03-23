const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const QUALITY = 80; // Calidad de las imágenes (0-100)
const MAX_WIDTH = 1920; // Ancho máximo para imágenes grandes

async function processImage(inputPath) {
    try {
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        // Solo redimensionar si la imagen es más ancha que MAX_WIDTH
        if (metadata.width > MAX_WIDTH) {
            image.resize(MAX_WIDTH, null, {
                fit: 'inside',
                withoutEnlargement: true
            });
        }

        // Optimizar según el formato
        if (metadata.format === 'jpeg' || metadata.format === 'jpg') {
            image.jpeg({ quality: QUALITY });
        } else if (metadata.format === 'png') {
            image.png({ quality: QUALITY });
        }

        // Guardar con el mismo nombre
        await image.toFile(inputPath + '.optimized');
        await fs.rename(inputPath + '.optimized', inputPath);
        
        console.log(`✅ Optimizada: ${path.basename(inputPath)}`);
    } catch (error) {
        console.error(`❌ Error procesando ${path.basename(inputPath)}:`, error.message);
    }
}

async function processDirectory(directory) {
    try {
        const files = await fs.readdir(directory);
        
        for (const file of files) {
            const fullPath = path.join(directory, file);
            const stat = await fs.stat(fullPath);
            
            if (stat.isDirectory()) {
                await processDirectory(fullPath);
            } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
                await processImage(fullPath);
            }
        }
    } catch (error) {
        console.error(`Error procesando directorio ${directory}:`, error);
    }
}

// Procesar el directorio de imágenes
processDirectory(path.join(process.cwd(), 'public', 'images'))
    .then(() => console.log('¡Optimización completada! 🎉'))
    .catch(console.error); 