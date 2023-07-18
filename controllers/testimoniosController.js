import { Testimonios } from '../models/Testimonios.js'

const guardarTestimonial = async (req, res) => {

    //Validar
    const { nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre está vacio'});
    };

    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo está vacio'});
    };

    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje está vacio'});
    };

    if(errores.length > 0) {
        //Consultar Testimonios Existentes
        const testimonios = await Testimonios.findAll();

        //Mostrar vista con errores
        res.render('testimonios', {
            pagina: 'Testimonios',
            errores,
            nombre,
            correo,
            mensaje,
            testimonios
        });
    }else {
        //Almacenarlo en la base de datos

        try {
            await Testimonios.create({
                nombre, correo, mensaje
            });

            res.redirect('/testimonios')
        } catch (error) {
            console.log(error);
        };
    };
};

export {
    guardarTestimonial
};