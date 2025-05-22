import { Testimonial } from '../models/Testimonial.js';

// Mostrar la página de testimoniales
const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
};

// Guardar un nuevo testimonial
const guardarTestimonial = async (req, res) => {
    // Extraer datos del formulario
    const { nombre, correo, mensaje } = req.body;
    const errores = [];

    if (!nombre) {
        errores.push({ mensaje: 'El nombre está vacío' });
    }
    if (!correo) {
        errores.push({ mensaje: 'El correo está vacío' });
    }
    if (!mensaje) {
        errores.push({ mensaje: 'El mensaje está vacío' });
    }

    if (errores.length > 0) {
        // Consultar testimoniales existentes para mostrar en la vista
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        });
    } else {
        // Guardar en la base de datos
        try {
            await Testimonial.create({ nombre, correo, mensaje });
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
};

export {
    paginaTestimoniales,
    guardarTestimonial
};
