document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle');
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    const tabButtons = document.querySelectorAll('.tab-button');
    const projectGrid = document.querySelector('.project-grid');

    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = projectModal.querySelector('.modal-close-btn');
    const modalProjectImage = document.getElementById('modal-project-image');
    const modalProjectTitle = document.getElementById('modal-project-title');
    const modalProjectDetailedDescription = document.getElementById('modal-project-detailed-description');
    const modalProjectButton1 = document.getElementById('modal-project-button1');
    const modalProjectButton2 = document.getElementById('modal-project-button2');
    // ===== ESTA ES LA LÍNEA IMPORTANTE A VERIFICAR/AÑADIR =====
    const modalProjectWarning = document.getElementById('modal-project-warning');
    // ==========================================================

    let currentLang;

    const translations = {
  "es": {
    "pageTitle": "Alfredo Arriaga - Portfolio",
    "yourName": "Alfredo Arriaga",
    "nav": {
      "inicio": "Inicio",
      "proyectos": "Proyectos",
      "contacto": "Contacto"
    },
    "inicio": {
      "title": "Bienvenido a Mi Portfolio",
      "titlev2": "José Alfredo Arriaga Rosillo",
      "description": "Soy un profesional con más de 7 años de experiencia en desarrollo de software, videojuegos, diseño y animación 3D, combinando habilidades técnicas y creatividad para crear soluciones innovadoras. Actualmente curso la Ingeniería en Software y Sistemas Computacionales, y participo activamente como instructor y ponente en temas relacionados con realidad virtual, inteligencia artificial y desarrollo de aplicaciones.",
      "cvButton1": "Ver Mi CV | Español",
      "cvButton2": "Ver Mi CV | Inglés"
    },
    "proyectos": {
      "title": "Mis Proyectos"
    },
    "tabs": {
      "todos": "Todos",
      "software": "Desarrollo de Aplicaciones y Software",
      "videojuegos": "Diseño y Desarrollo de Videojuegos, VR/AR y Experiencias Inmersivas",
      "m3d": "Modelado 3D",
      "a3d": "Animación 3D",
      "ui": "Diseño de Interfaces (UI/UX)",
      "ilustracion": "Ilustración Digital y Diseño Gráfico"
    },
    "contacto": {
      "title": "Contacto",
      "description": "Si desea colaborar, hacer alguna consulta o invitarme a dar una ponencia o taller, no dude en contactarme a traves de <a href='mailto:AlfredAR8@outlook.com'>AlfredAR8@outlook.com</a>.",
      "linkedin": "También puedes encontrarme en <a href='https://www.linkedin.com/in/jalfredar' target='_blank'>LinkedIn | JAlfredAR</a>."
    },
    "projectsData": [
            {
        "id": 1,
        "category": "software",
        "imageSrc": "meetingchecker.png",
        "title": "Meeting Checker",
        "description": "Aplicación de escritorio (Windows) publicada en Microsoft Store para notificar el inicio de reuniones en Google Meet mediante alertas en Discord.",
        "detailedDescription": "Una de mis primeras aplicaciones ambiciosas, lanzada en la Microsoft Store y actualmente en proceso de mantenimiento para un posible relanzamiento. Meeting Checker detectaba automáticamente el inicio de reuniones en Google Meet y enviaba notificaciones a través de Discord. Esta herramienta buscaba solucionar la necesidad de recargar constantemente la página de Google Meet cuando el anfitrión aún no había ingresado. Curiosamente, dos semanas tras su lanzamiento, Google implementó una funcionalidad nativa que permitía esperar dentro de la reunión, volviendo obsoleta la función principal de Meeting Checker. Por este motivo, se retiró de la venta, aunque la app aun permanece visible en la Microsoft Store.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://apps.microsoft.com/store/detail/meeting-checker/9PBRFC6L0S8X",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 2,
        "category": "videojuegos",
        "imageSrc": "skydome.png",
        "title": "SkyDome",
        "description": "Aplicación inmersiva para Meta Quest, desarrollada en Unreal Engine y disponible en la Meta Quest Store, que transforma el techo de cualquier habitación en un cielo dinámico.",
        "detailedDescription": "SkyDome es una aplicación de realidad mixta para Meta Quest que redefine el ambiente de cualquier espacio interior. Mediante el escaneo del entorno, identifica el techo de la habitación y lo reemplaza con cielos dinámicos y personalizables, desde noches estrelladas hasta un cielo soleado o imágenes 360° subidas por el usuario. El objetivo de SkyDome es enriquecer la percepción del entorno físico, ofreciendo una ventana a cielos abiertos desde la comodidad de una habitación, oficina o estudio, mejorando así la atmósfera del lugar a través de la realidad mixta.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://www.meta.com/experiences/7103415146361501/",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
    {
        "id": 3,
        "category": "software",
        "imageSrc": "echoinsight.png",
        "title": "Echo Insight",
        "description": "Aplicación para iOS, iPadOS, macOS y visionOS que utiliza IA para analizar playlists y generar recomendaciones musicales personalizadas.",
        "detailedDescription": "Echo Insight es una aplicación de descubrimiento musical impulsada por inteligencia artificial. Su función principal es analizar el contenido de las playlists favoritas del usuario para ofrecer recomendaciones precisas de canciones y artistas afines a sus gustos. Simplemente compartiendo una playlist, la app procesa la información y genera sugerencias, buscando renovar y enriquecer la experiencia de descubrimiento musical del usuario.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://apps.apple.com/mx/app/echo-insight/id6657958000",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 4,
        "category": "software",
        "imageSrc": "bot.png",
        "title": "Bots de Gestión Automatizada para Redes Sociales (Fortnite)",
        "description": "Desarrollo de bots en Node.js para automatizar la publicación de contenido visual y actualizaciones de Fortnite en Twitter, utilizando APIs públicas.",
        "detailedDescription": "Creé una serie de bots en Node.js especializados en la difusión de novedades sobre Fortnite. Estos bots monitoreaban APIs públicas para detectar actualizaciones del juego (nuevos cosméticos, eventos, cambios en la tienda) y, al identificar nueva información, generaban automáticamente imágenes optimizadas para redes sociales, publicándolas en una cuenta de Twitter. Cada bot se enfocaba en un tipo de contenido específico, trabajando coordinadamente para ofrecer información inmediata y visualmente atractiva, manteniendo una presencia activa y profesional sin intervención manual constante.",
        "button1": {
          "text_es": "Ver código",
          "text_en": "View code",
          "link": "https://github.com/AlfredAR8/Portfolio/tree/main/Bots",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 5,
        "category": "ilustracion",
        "imageSrc": "warrior.png",
        "title": "Concepto de Skin Reactiva: Guerrero Azteca",
        "description": "Diseño conceptual de una skin reactiva para personaje de videojuego, que modifica su apariencia y accesorios en tiempo real según acciones o estados del juego.",
        "detailedDescription": "Desarrollé el concepto para una skin de personaje reactiva, inspirada en la cultura azteca. Esta skin cambia dinámicamente elementos como armadura, accesorios y armas en respuesta a acciones específicas del jugador (activar habilidades, alcanzar estados como salud o daño). El diseño incorpora detalles culturales y simbólicos que enriquecen la narrativa visual, buscando generar una experiencia más envolvente y personalizada dentro del juego.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/warrior.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 6,
        "category": "ilustracion",
        "imageSrc": "strange.png",
        "title": "Ilustración: Doctor Strange en el Multiverso de la Locura",
        "description": "Ilustración digital inspirada en la película, capturando la esencia mágica y visual del universo Marvel con personajes y elementos clave.",
        "detailedDescription": "Realicé una ilustración digital basada en 'Doctor Strange en el Multiverso de la Lococidad.' En esta pieza, representé a los personajes principales dentro de una escena conceptual que integra elementos visuales y simbólicos característicos de la película.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/strange.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Disney ni Marvel, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Marvel content, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 7,
        "category": "ilustracion",
        "imageSrc": "slurp.png",
        "title": "Concepto de Skin Reactiva: Monstruo de Slurp",
        "description": "Diseño conceptual de una skin reactiva para videojuego que evoluciona visualmente con efectos dinámicos en accesorios, cuerpo y movimientos según eventos del juego.",
        "detailedDescription": "Conceptualicé y diseñé una skin de personaje reactiva con temática de 'Monstruo de Slurp'. Esta skin incorpora efectos visuales dinámicos en accesorios (como calabazas y esferas) y transformaciones en el cuerpo (pies, texturas) que responden a acciones clave como eliminaciones y otros eventos dentro de la partida, ofreciendo una narrativa visual evolutiva y una interacción más inmersiva.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/slurp.jpg",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 8,
        "category": "ilustracion",
        "imageSrc": "pumpkin.png",
        "title": "Ilustración para NFT: Calabaza Tecnológica",
        "description": "Diseño de una ilustración digital original para un NFT, presentando una calabaza con un estilo tecnológico y detalles llamativos, orientada al arte coleccionable.",
        "detailedDescription": "Creé un diseño digital original concebido como un NFT, protagonizado por una 'Calabaza Tecnológica'. Este proyecto demuestra habilidades en ilustración digital creativa y una comprensión del emergente mercado de tokens no fungibles. (Este NFT se emplea solo para usos personales y no comerciales. No ha sido puesto a la venta ni intercambiado, ni existe intención de lanzarlo en el futuro.)",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/pumpkin.jpg",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 9,
        "category": "ui",
        "imageSrc": "clothes.png",
        "title": "Diseño UI para App de Ropa con Avatar 3D",
        "description": "Diseño de la interfaz de usuario (UI) para una aplicación móvil de e-commerce de moda, permitiendo visualizar y personalizar prendas en un avatar 3D.",
        "detailedDescription": "Desarrollé el diseño de interfaz para una aplicación móvil de e-commerce de moda, centrando el concepto en la visualización y personalización de prendas a través de un avatar 3D interactivo. La idea era ofrecer a los usuarios una experiencia intuitiva y atractiva que les permitiera explorar y combinar productos de forma dinámica. Cabe destacar que este proyecto solo avanzó hasta la fase de bocetado a mano, sin llegar a generar un mockup digital.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/clothing.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 10,
        "category": "ui",
        "imageSrc": "icp.png",
        "title": "Diseño UI: Pantalla de Inicio para Videojuego",
        "description": "Diseño de la interfaz de inicio para una aplicación de juego, con opciones claras de inicio/registro y selección de personajes, mejorando la experiencia de usuario.",
        "detailedDescription": "Desarrollé el diseño de la pantalla de inicio para una aplicación de juego social, inspirada en la estética de 'Club Penguin Island'. Se integraron funciones de inicio de sesión y registro, junto con una selección visual e interactiva de personajes, priorizando la usabilidad y una estética amigable para una primera impresión atractiva.",
        "button1": {
          "text_es": "Ver diseño completo",
          "text_en": "View Full Design",
          "link": "./full/cplogin.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Club Penguin ni Disney Interactive, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 11,
        "category": "ui",
        "imageSrc": "fortbot.png",
        "title": "Diseño Gráfico para Bot de Noticias de Videojuegos (Fortnite)",
        "description": "Creación de plantillas gráficas para un bot que genera automáticamente imágenes con noticias y actualizaciones del videojuego Fortnite, optimizadas para redes sociales.",
        "detailedDescription": "Desarrollé el sistema de diseño gráfico para un bot automatizado encargado de crear y publicar imágenes informativas sobre noticias, actualizaciones y eventos del videojuego Fortnite. Este trabajo incluyó la creación de plantillas y elementos visuales llamativos, con una estructura clara para comunicar eficazmente y de forma atractiva con la comunidad en plataformas digitales.",
        "button1": {
          "text_es": "Ver diseño completo",
          "text_en": "View Full Design",
          "link": "./full/fortbot.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 12,
        "category": "a3d",
        "imageSrc": "encanto.png",
        "title": "Animación 3D en Blender: We Don’t Talk About Bruno (Encanto)",
        "description": "Recreación de una escena de 'Encanto' mediante animación 3D en Blender, enfocada en modelado de personajes y sincronización de movimientos con la música.",
        "detailedDescription": "Desarrollé una animación 3D en Blender inspirada en la canción “We Don’t Talk About Bruno” de la película Encanto. El proyecto abarcó el modelado, el rigging y la animación de personajes, con especial atención al movimiento corporal con la música, demostrando dominio en técnicas de animación digital. No se animaron ni los pies ni las expresiones faciales; este proyecto no llegó a esa fase.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/encanto.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Disney ni Club Penguin, incluyendo sus modelos 3D y musica y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Club Penguin content, including its 3D models and music, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 13,
        "category": "a3d",
        "imageSrc": "hocus.png",
        "title": "Animación 3D en Blender: One Way or Another (Hocus Pocus 2)",
        "description": "Creación de una animación 3D en Blender basada en un fragmento musical de 'Hocus Pocus 2', aplicando técnicas de rigging y animación para movimientos expresivos.",
        "detailedDescription": "Realicé una animación 3D detallada en Blender inspirada en un pequeño fragmento de la canción ‘One Way or Another’ de la película Hocus Pocus 2. El trabajo involucró modelado, rigging y animación de los personajes, enfocándome en lograr movimientos naturales y expresivos que capturaran la esencia del material original. Aunque solo se desarrolló una parte muy breve de la canción, consideré importante conservar y documentar el avance realizado. Este proyecto no alcanzó la fase de animación de pies ni de expresiones faciales.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/hocus.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Disney ni Club Penguin, incluyendo sus modelos 3D y musica y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Club Penguin content, including its 3D models and music, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 14,
        "category": "m3d",
        "imageSrc": "pizza.png",
        "title": "Modelado 3D: Exterior Clásico de Club Penguin",
        "description": "Recreación mediante modelado 3D detallado del exterior de un edificio icónico de la versión clásica del juego Club Penguin, replicando su estilo característico.",
        "detailedDescription": "Desarrollé y texturize un modelado 3D del exterior de un edificio emblemático de la versión clásica del videojuego Club Penguin. El enfoque fue capturar fielmente sus detalles arquitectónicos y el estilo visual distintivo, utilizando técnicas de modelado y texturizado para recrear una pieza representativa y nostálgica del universo del juego.",
        "button1": {
          "text_es": "Vista 1",
          "text_en": "View 1",
          "link": "./full/pizza.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Club Penguin ni Disney Interactive, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 15,
        "category": "m3d",
        "imageSrc": "intpizza.png",
        "title": "Modelado 3D: Interior de Pizzería de Club Penguin",
        "description": "Creación de un modelado 3D detallado del interior de la pizzería icónica de la versión clásica del juego Club Penguin, incluyendo mobiliario, decoración y elementos característicos para un ambiente realista.",
        "detailedDescription": "Desarrollé un modelado 3D completo del interior de la pizzería icónica de la versión clásica del juego Club Penguin. Este proyecto integró detalles como mesas, sillas, barra, horno y elementos decorativos, prestando especial atención a la distribución espacial y al realismo visual. Se utilizaron técnicas de modelado y texturizado para crear un ambiente acogedor y representativo del establecimiento.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/pizzain.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Club Penguin ni Disney Interactive, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 16,
        "category": "m3d",
        "imageSrc": "deadlock.png",
        "title": "Render de Skin Conceptual para Fortnite: Texturizado y Partículas",
        "description": "Proceso completo de texturizado, aplicación de efectos de partículas y renderizado para un concepto de skin de Fortnite con estilo “obscuro”.",
        "detailedDescription": "Desarrollé el texturizado detallado, la integración de efectos de partículas (como energía y runas) y el renderizado final para una skin conceptual original para Fortnite. El objetivo fue crear un diseño visualmente impactante y coherente incluyendo la creación de texturas personalizadas, efectos luminosos y una presentación realista para destacar la estética del personaje.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/deadlock.jpg",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 17,
        "category": "a3d",
        "imageSrc": "surf.png",
        "title": "Animación Conceptual de Skin para Fortnite",
        "description": "Creación de una animación conceptual básica para una skin de Fortnite, mostrando movimientos y poses clave para visualizar la dinámica del personaje.",
        "detailedDescription": "Desarrollé una animación conceptual breve para una skin original inspirada en Fortnite, enfocándome en capturar movimientos esenciales y poses distintivas que transmitieran la personalidad del personaje. El concepto se presentó en un entorno playero, destacando una actitud relajada y un estilo único, mediante una animación que lo muestra realizando una actividad acuática: surf sobre una tabla. La propuesta incluía la idea de hacer transversal el gesto dentro del juego, permitiendo que el personaje pudiera desplazarse mientras ejecuta la animación.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/surf.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 18,
        "category": "m3d",
        "imageSrc": "jonesy.png",
        "title": "Modelado y Edición 3D: Concepto de Skin para Fortnite",
        "description": "Desarrollo de modelado y edición 3D para un concepto de skin de Fortnite, centrado en la pose, detalles y ambientación del personaje.",
        "detailedDescription": "Realicé el modelado y edición 3D de una skin conceptual para Fortnite, basada en el personaje icónico Jonesy, al que se le otorgó un estilo veraniego. El trabajo se desarrolló en un entorno playero y exploró diversas variaciones visuales del personaje, aplicando técnicas de modelado, texturizado y composición. El objetivo fue presentar una propuesta coherente, atractiva y alineada con el estilo del universo del juego.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/jonesy.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 19,
        "category": "m3d",
        "imageSrc": "reprogrammer.png",
        "title": "Diseño Conceptual de Skin: The Reprogrammer (Fortnite)",
        "description": "Creación de un diseño conceptual completo para la skin \"The Reprogrammer\" de Fortnite, integrando elementos visuales tecnológicos y efectos holográficos.",
        "detailedDescription": "Desarrollé un diseño conceptual detallado para la skin ‘The Reprogrammer’, pensada para Fortnite e inspirada en temáticas de tecnología y reprogramación digital. El concepto abarca el personaje, sus accesorios, efectos holográficos y una estética futurista, con especial énfasis en la coherencia visual y temática para enriquecer la experiencia del jugador. La propuesta incluía una funcionalidad reactiva a las eliminaciones y un gesto incorporado que aprovechaba la tecnología Chaos de Unreal Engine 5, generando una lluvia de ceros y unos que se rompían al impactar contra el personaje, dejando un pequeño montículo de fragmentos en el suelo antes de desvanecerse.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/reprogrammer.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se cuenta con derechos sobre los contenidos originales de Fortnite ni sus modelos, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 20,
        "category": "videojuegos",
        "imageSrc": "cpgame.png",
        "title": "Club Penguin en Unreal Engine 5",
        "description": "Desarrollo de un prototipo conceptual de Club Penguin utilizando Unreal Engine 5, explorando la recreación y modernización visual del juego clásico.",
        "detailedDescription": "Creé un proyecto conceptual en 3D de Club Penguin utilizando Unreal Engine 5, con el objetivo de recrear fielmente los entornos y personajes clásicos mediante un apartado gráfico moderno. El proyecto exploró técnicas avanzadas de modelado, iluminación y shaders para actualizar visualmente el universo original, manteniendo su esencia y estilo reconocible. Además, se implementó un sistema de inicio de sesión con base de datos y funcionalidad multijugador a través de un servidor dedicado. Este proyecto no fue desarrollado con fines comerciales, sino como ejercicio de aprendizaje para profundizar en las capacidades técnicas de UE5.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/cpgame.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "text_es": "Nota: Este proyecto fue realizado con fines personales y de aprendizaje, sin fines comerciales ni lucrativos. No se poseen derechos sobre los contenidos originales de Club Penguin ni Disney Interactive, y se respetaron todos los términos de uso aplicables.",
            "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
            "isVisible": true
        }
      },
      {
        "id": 21,
        "category": "videojuegos",
        "imageSrc": "viewworlds.png",
        "title": "Videojuego Educativo VR/Escritorio: “View Worlds”",
        "description": "Diseño y desarrollo individual de una aplicación educativa multiplataforma (VR y escritorio) que combina exploración interactiva y gamificación.",
        "detailedDescription": "Realicé de manera integral el diseño y desarrollo de “View Worlds”, una aplicación educativa concebida inicialmente para Realidad Virtual y posteriormente adaptada a plataformas de escritorio. Implementé mecánicas interactivas donde los estudiantes exploran entornos inmersivos, responden preguntas y recolectan llaves para desbloquear niveles, fomentando el aprendizaje activo. Se incorporaron elementos de gamificación para motivar la participación, utilizando Unreal Engine 4 para una experiencia visual fluida y atractiva.",
        "button1": {
          "text_es": "Jugabilidad (Juego VR) ",
          "text_en": "Gameplay (VR Game)",
          "link": "./full/view.mp4",
          "isVisible": true
        },
        "button2": {
          "text_es": "Imagen(Juego Educativo)",
          "text_en": "Image (Educational Game)",
          "link": "./full/worlds.png",
          "isVisible": true
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 22,
        "category": "ui",
        "imageSrc": "school.png",
        "title": "Diseño de interfaz para calendario escolar interactivo",
        "description": "Diseñé la interfaz de usuario para un calendario escolar que organiza clases, horarios y detalles importantes con una presentación clara y accesible.",
        "detailedDescription": "Desarrollé el diseño de interfaz para un calendario escolar digital, facilitando la gestión visual de clases, horarios, profesores y descansos. La interfaz prioriza la claridad y facilidad de uso, permitiendo a los estudiantes navegar rápidamente entre fechas y obtener detalles específicos de cada materia, mejorando la planificación académica y la experiencia del usuario.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/school.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 23,
        "category": "ui",
        "imageSrc": "secure.png",
        "title": "Diseño de interfaz para aplicación de transferencia segura de archivos",
        "description": "Diseñé la interfaz de usuario para una app que permite compartir fotos y archivos con cifrado, asegurando la privacidad y facilidad de uso.",
        "detailedDescription": "Desarrollé el diseño de interfaz para una aplicación móvil enfocada en la transferencia segura y cifrada de fotos y archivos, integrando funcionalidades intuitivas para enviar y recibir contenido, gestión de claves seguras y mensajería privada, garantizando una experiencia amigable y protegida para el usuario.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/secure.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
      },
      {
        "id": 24,
        "category": "videojuegos",
        "imageSrc": "felino.png",
        "title": "Juego del Felino – Experiencia Inmersiva con Proyección 3D Física y Virtual",
        "description": "Juego innovador que combina un espacio físico real con proyecciones tridimensionales digitales usando dos proyectores, creando una experiencia inmersiva donde lo tangible y lo virtual interactúan en tiempo real.",
        "detailedDescription": "El Juego del Felino es una experiencia inmersiva que fusiona el entorno físico y virtual a través del uso de dos proyectores que proyectan imágenes tridimensionales sobre una estructura física. Esta combinación permite a los jugadores interactuar con elementos reales y digitales simultáneamente, brindando una sensación única de profundidad y presencia. Mediante tecnología avanzada de proyección y sincronización, el juego crea un espacio donde los límites entre lo tangible y lo virtual se combinan, ofreciendo una experiencia multisensorial envolvente. Los usuarios pueden explorar y participar activamente en un entorno que mezcla arte, tecnología y juego, ideal para aplicaciones educativas, culturales o recreativas que buscan innovar en la forma de interacción con contenidos digitales.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/felino.mp4",
          "isVisible": true
        },
        "button2": {
          "text_es": "Ver el proyecto completo",
          "text_en": "View the full project",
          "link": "./full/felino.pdf",
          "isVisible": true
        },
        "warning": {
            "isVisible": false
        }
      },
            {
        "id": 25,
        "category": "software",
        "imageSrc": "perfectpay.png",
        "title": "Perfect Pay",
        "description": "Aplicación para Android que ayuda a dividir los gastos de algún pago a realizar en conjunto con más personas.",
        "detailedDescription": "Perfect Pay es una aplicación para Android diseñada para facilitar la división y gestión de gastos compartidos entre varias personas. Calcula automáticamente cuánto debe aportar cada participante, simplificando la organización de pagos conjuntos en situaciones como viajes, cenas o compras grupales. Actualmente se encuentra en fase de beta cerrada, con planes de lanzamiento.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://play.google.com/apps/testing/com.arxbite.perfectpay",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
            "isVisible": false
        }
    }
    ]
  },
  "en": {
    "pageTitle": "Alfredo Arriaga - Portfolio",
    "yourName": "Alfredo Arriaga",
    "nav": {
      "inicio": "Home",
      "proyectos": "Projects",
      "contacto": "Contact"
    },
    "inicio": {
      "title": "Welcome to My Portfolio",
      "titlev2": "José Alfredo Arriaga Rosillo",
      "description": "I am a professional with over 7 years of experience in software development, video games, 3D design, and animation, combining technical skills and creativity to create innovative solutions. I am currently pursuing a degree in Software Engineering and Computer Systems, and I actively participate as an instructor and speaker on topics related to virtual reality, artificial intelligence, and application development.",
      "cvButton1": "View My CV | Spanish",
      "cvButton2": "View My CV | English"
    },
    "proyectos": {
      "title": "My Projects"
    },
    "tabs": {
      "todos": "All",
      "software": "Application and Software Development",
      "videojuegos": "Video Game Design and Development, VR/AR and Immersive Experiences",
      "m3d": "3D Modeling",
      "a3d": "3D Animation",
      "ui": "Interface Design (UI/UX)",
      "ilustracion": "Digital Illustration and Graphic Design"
    },
    "contacto": {
      "title": "Contact",
      "description": "If you wish to collaborate, ask a question, or invite me to give a presentation or workshop, do not hesitate to contact me via <a href='mailto:AlfredAR8@outlook.com'>AlfredAR8@outlook.com</a>.",
      "linkedin": "You can also find me on <a href='https://www.linkedin.com/in/jalfredar' target='_blank'>LinkedIn | JAlfredAR</a>."
    },
    "projectsData": [
      {
        "id": 1,
        "category": "software",
        "imageSrc": "meetingchecker.png",
        "title": "Meeting Checker",
        "description": "Desktop application (Windows) published on the Microsoft Store to notify the start of Google Meet meetings via Discord alerts.",
        "detailedDescription": "One of my first ambitious applications, launched on the Microsoft Store and currently undergoing maintenance for a possible relaunch. Meeting Checker automatically detected the start of Google Meet meetings and sent notifications via Discord. This tool aimed to solve the need to constantly reload the Google Meet page when the host had not yet joined. Interestingly, two weeks after its launch, Google implemented a native feature that allowed waiting inside the meeting, rendering Meeting Checker's main function obsolete. For this reason, it was withdrawn from sale, although its listing remains visible on the Microsoft Store.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://apps.microsoft.com/store/detail/meeting-checker/9PBRFC6L0S8X",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 2,
        "category": "videojuegos",
        "imageSrc": "skydome.png",
        "title": "SkyDome",
        "description": "Immersive application for Meta Quest, developed in Unreal Engine and available on the Meta Quest Store, that transforms the ceiling of any room into a dynamic sky.",
        "detailedDescription": "SkyDome is a mixed reality application for Meta Quest that redefines the ambiance of any indoor space. By scanning the environment, it identifies the room's ceiling and replaces it with dynamic and customizable skies, from starry nights to a sunny sky or user-uploaded 360° images. SkyDome's goal is to enrich the perception of the physical environment, offering a window to open skies from the comfort of a room, office, or studio, thereby enhancing the place's atmosphere through mixed reality.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://www.meta.com/experiences/7103415146361501/",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 3,
        "category": "software",
        "imageSrc": "echoinsight.png",
        "title": "Echo Insight",
        "description": "Application for iOS, iPadOS, macOS, and visionOS that uses AI to analyze playlists and generate personalized music recommendations.",
        "detailedDescription": "Echo Insight is an AI-powered music discovery application. Its main function is to analyze the content of the user's favorite playlists to offer precise recommendations of songs and artists similar to their tastes. Simply by sharing a playlist, the app processes the information and generates suggestions, aiming to renew and enrich the user's music discovery experience.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://apps.apple.com/mx/app/echo-insight/id6657958000",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 4,
        "category": "software",
        "imageSrc": "bot.png",
        "title": "Automated Management Bots for Social Networks (Fortnite)",
        "description": "Development of Node.js bots to automate the publication of visual content and Fortnite updates on Twitter, using public APIs.",
        "detailedDescription": "I created a series of Node.js bots specialized in disseminating news about Fortnite. These bots monitored public APIs to detect game updates (new cosmetics, events, shop changes) and, upon identifying new information, automatically generated images optimized for social media, publishing them on a Twitter account. Each bot focused on a specific type of content, working coordinately to offer immediate and visually attractive information, maintaining an active and professional presence without constant manual intervention.",
        "button1": {
          "text_es": "Ver código",
          "text_en": "View code",
          "link": "https://github.com/AlfredAR8/Portfolio/tree/main/Bots",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 5,
        "category": "ilustracion",
        "imageSrc": "warrior.png",
        "title": "Reactive Skin Concept: Aztec Warrior",
        "description": "Conceptual design of a reactive skin for a video game character, which modifies its appearance and accessories in real-time according to game actions or states.",
        "detailedDescription": "I developed the concept for a reactive character skin, inspired by Aztec culture. This skin dynamically changes elements such as armor, accessories, and weapons in response to specific player actions (activating abilities, reaching states like health or damage). The design incorporates cultural and symbolic details that enrich the visual narrative, aiming to generate a more immersive and personalized experience within the game.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/warrior.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 6,
        "category": "ilustracion",
        "imageSrc": "strange.png",
        "title": "Illustration: Doctor Strange in the Multiverse of Madness",
        "description": "Digital illustration inspired by the movie, capturing the magical and visual essence of the Marvel universe with key characters and elements.",
        "detailedDescription": "I created a digital illustration based on 'Doctor Strange in the Multiverse of Madness.' In this piece, I depicted the main characters within a conceptual scene that integrates visual and symbolic elements characteristic of the film.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/strange.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Marvel content, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Marvel content, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 7,
        "category": "ilustracion",
        "imageSrc": "slurp.png",
        "title": "Reactive Skin Concept: Slurp Monster",
        "description": "Conceptual design of a reactive video game skin that visually evolves with dynamic effects on accessories, body, and movements according to game events.",
        "detailedDescription": "I conceptualized and designed a reactive character skin with a 'Slurp Monster' theme. This skin incorporates dynamic visual effects on accessories (such as pumpkins and spheres) and transformations on the body (feet, textures) that respond to key actions like eliminations and other in-game events, offering an evolving visual narrative and a more immersive interaction.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/slurp.jpg",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 8,
        "category": "ilustracion",
        "imageSrc": "pumpkin.png",
        "title": "NFT Illustration: Tech Pumpkin",
        "description": "Design of an original digital illustration for an NFT, featuring a pumpkin with a technological style and striking details, aimed at collectible art.",
        "detailedDescription": "I created an original digital design conceived as an NFT, starring a 'Tech Pumpkin'. This project demonstrates skills in creative digital illustration and an understanding of the emerging non-fungible token market. (This NFT is used for personal and non-commercial purposes only. It has not been offered for sale or traded, nor is there any intention to launch it in the future.)",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/pumpkin.jpg",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 9,
        "category": "ui",
        "imageSrc": "clothes.png",
        "title": "UI Design for Clothing App with 3D Avatar",
        "description": "User interface (UI) design for a mobile fashion e-commerce application, allowing visualization and customization of garments on a 3D avatar.",
        "detailedDescription": "I developed the interface design for a mobile application of a fashion e-commerce. The main focus was the visualization and customization of garments through an interactive 3D avatar. The idea was to offer users an intuitive and attractive experience that would allow them to explore and combine products dynamically. It is worth noting that this project only advanced to the hand-sketching phase, without reaching the generation of a digital mockup.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/clothing.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 10,
        "category": "ui",
        "imageSrc": "icp.png",
        "title": "UI Design: Video Game Start Screen",
        "description": "Design of the start screen interface for a game application, with clear login/registration options and character selection, improving the user experience.",
        "detailedDescription": "I developed the start screen design for a social gaming application, inspired by the aesthetics of 'Club Penguin Island'. Login and registration functions were integrated, along with a visual and interactive character selection, prioritizing usability and a friendly aesthetic for an attractive first impression.",
        "button1": {
          "text_es": "Ver diseño completo",
          "text_en": "View Full Design",
          "link": "./full/cplogin.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 11,
        "category": "ui",
        "imageSrc": "fortbot.png",
        "title": "Graphic Design for Video Game News Bot (Fortnite)",
        "description": "Creation of graphic templates for a bot that automatically generates images with news and updates from the Fortnite video game, optimized for social media.",
        "detailedDescription": "I developed the graphic design system for an automated bot responsible for creating and publishing informative images about news, updates, and events of the Fortnite video game. This work included the creation of templates and eye-catching visual elements, with a clear structure to communicate effectively and attractively with the community on digital platforms.",
        "button1": {
          "text_es": "Ver diseño completo",
          "text_en": "View Full Design",
          "link": "./full/fortbot.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 12,
        "category": "a3d",
        "imageSrc": "encanto.png",
        "title": "3D Animation in Blender: We Don’t Talk About Bruno (Encanto)",
        "description": "Recreation of a scene from 'Encanto' using 3D animation in Blender, focused on character modeling and synchronization of movements with the music.",
        "detailedDescription": "I developed a 3D animation in Blender inspired by the song 'We Don’t Talk About Bruno' from the movie Encanto. The project encompassed character modeling, rigging, and animation of characters, with special attention to body movement with the music, demonstrating mastery in digital animation techniques. Neither the feet nor facial expressions were animated; this project did not reach that phase.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/encanto.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Club Penguin content, including its 3D models and music, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Club Penguin content, including its 3D models and music, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 13,
        "category": "a3d",
        "imageSrc": "hocus.png",
        "title": "3D Animation in Blender: One Way or Another (Hocus Pocus 2)",
        "description": "Creation of a 3D animation in Blender based on a musical fragment from 'Hocus Pocus 2', applying rigging and animation techniques for expressive movements.",
        "detailedDescription": "I created a detailed 3D animation in Blender inspired by a fragment of the song 'One Way or Another' from the movie 'Hocus Pocus 2'. The work involved modeling, rigging, and animating the characters, focusing on achieving natural and expressive movements that captured the essence of the original material. Although only a short part of the song was developed, I documented the progress made. This project did not reach the foot animation or facial expression phase.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/hocus.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Club Penguin content, including its 3D models and music, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Disney or Club Penguin content, including its 3D models and music, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 14,
        "category": "m3d",
        "imageSrc": "pizza.png",
        "title": "3D Modeling: Classic Club Penguin Exterior",
        "description": "Detailed 3D modeling recreation of the exterior of an iconic building from the classic version of the Club Penguin game, replicating its characteristic style.",
        "detailedDescription": "I developed and textured a 3D model of the exterior of an emblematic building from the classic version of the Club Penguin video game. The focus was to faithfully capture its architectural details and distinctive visual style, using modeling and texturing techniques to recreate a representative and nostalgic piece from the game's universe.",
        "button1": {
          "text_es": "Vista 1",
          "text_en": "View 1",
          "link": "./full/pizza.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 15,
        "category": "m3d",
        "imageSrc": "intpizza.png",
        "title": "3D Modeling: Club Penguin Pizzeria Interior",
        "description": "Creation of a detailed 3D model of the iconic Club Penguin pizzeria interior, including furniture, decoration, and characteristic elements for a realistic ambiance.",
        "detailedDescription": "I developed a complete 3D model of the iconic Club Penguin pizzeria interior. This project integrated details such as tables, chairs, a counter, an oven, and decorative elements, paying special attention to spatial distribution and visual realism. Modeling and texturing techniques were used to create a cozy and representative atmosphere of the establishment.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/pizzain.png",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 16,
        "category": "m3d",
        "imageSrc": "deadlock.png",
        "title": "Conceptual Skin Render for Fortnite: Texturing and Particles",
        "description": "Complete process of texturing, particle effects application, and rendering for a Fortnite skin concept with a dark style.",
        "detailedDescription": "I developed the detailed texturing, integration of particle effects (such as energy and runes), and final rendering for an original conceptual skin for Fortnite. The goal was to create a visually impactful and coherent design, including the creation of custom textures, lighting effects, and a realistic presentation to highlight the character's aesthetics.",
        "button1": {
          "text_es": "Ver en Pantalla Completa",
          "text_en": "View on Fullscreen",
          "link": "./full/deadlock.jpg",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 17,
        "category": "a3d",
        "imageSrc": "surf.png",
        "title": "Conceptual Skin Animation for Fortnite",
        "description": "Creation of a basic conceptual animation for a Fortnite skin, showing key movements and poses to visualize the character's dynamics.",
        "detailedDescription": "I developed a brief conceptual animation for an original skin inspired by Fortnite, focusing on capturing essential movements and distinctive poses that conveyed the character's personality. The concept was presented in a beach environment, highlighting a relaxed attitude and a unique style, through an animation showing him performing a water activity: surfing on a board. The proposal included the idea of making the emote transversal within the game, allowing the character to move while executing the animation.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/surf.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 18,
        "category": "m3d",
        "imageSrc": "jonesy.png",
        "title": "3D Modeling and Editing: Fortnite Skin Concept",
        "description": "Development of 3D modeling and editing for a Fortnite skin concept, focused on the character's pose, details, and ambiance.",
        "detailedDescription": "I performed the 3D modeling and editing for a conceptual Fortnite skin, based on the iconic character Jonesy, who was given a summer style. The work was developed in a beach environment and explored various visual variations of the character, applying modeling, texturing, and composition techniques. The objective was to present a coherent, attractive, and aligned proposal with the style of the game's universe.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/jonesy.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 19,
        "category": "m3d",
        "imageSrc": "reprogrammer.png",
        "title": "Conceptual Skin Design: The Reprogrammer (Fortnite)",
        "description": "Creation of a complete conceptual design for 'The Reprogrammer' Fortnite skin, integrating technological visual elements and holographic effects.",
        "detailedDescription": "I developed a detailed conceptual design for 'The Reprogrammer' skin, envisioned for Fortnite and inspired by themes of technology and digital reprogramming. The concept includes the character, accessories, holographic effects, and a futuristic aesthetic, with an emphasis on visual coherence and thematic consistency to enrich the player's experience. The proposal included reactive functionality to eliminations and an incorporated emote that leveraged Unreal Engine 5's Chaos technology, generating a shower of zeros and ones that broke upon impacting the character, leaving a small pile of fragments on the ground before disappearing.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/reprogrammer.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Fortnite content or models, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 20,
        "category": "videojuegos",
        "imageSrc": "cpgame.png",
        "title": "3D Conceptual Project: Club Penguin in Unreal Engine 5",
        "description": "Development of a conceptual prototype of Club Penguin using Unreal Engine 5, exploring the recreation and visual modernization of the classic game.",
        "detailedDescription": "I created a 3D conceptual project of Club Penguin using Unreal Engine 5, with the objective of faithfully recreating the classic environments and characters using modern graphics. This project explored advanced modeling, lighting, and shader techniques to visually update the original universe, aiming to maintain its essence and recognizable style while leveraging UE5's capabilities. Additionally, a login system with a database and multiplayer functionality via a dedicated server was implemented. This work was a learning exercise and had no commercial purpose.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/cpgame.mp4",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "text_es": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "text_en": "Note: This project was created for personal and educational purposes, not for commercial or profit. No rights are held to the original Club Penguin or Disney Interactive content, and all applicable terms of use were adhered to.",
          "isVisible": true
        }
      },
      {
        "id": 21,
        "category": "videojuegos",
        "imageSrc": "viewworlds.png",
        "title": "Educational VR/Desktop Video Game: “View Worlds”",
        "description": "Multiplatform educational application (VR and desktop) that combines interactive exploration and gamification.",
        "detailedDescription": "I carried out the comprehensive design and development of “View Worlds”, an educational application initially conceived for Virtual Reality and later adapted to desktop platforms. I implemented interactive mechanics where students explore immersive environments, answer questions, and collect keys to unlock levels, promoting active learning. Gamification elements were incorporated to motivate participation, using Unreal Engine 4 for a fluid and attractive visual experience.",
        "button1": {
          "text_es": "Jugabilidad (Juego VR)",
          "text_en": "Gameplay (VR Game)",
          "link": "./full/view.mp4",
          "isVisible": true
        },
        "button2": {
          "text_es": "Imagen (Juego Educativo)",
          "text_en": "Image (Educational Game)",
          "link": "./full/worlds.png",
          "isVisible": true
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 22,
        "category": "ui",
        "imageSrc": "school.png",
        "title": "Interface Design for Interactive School Calendar",
        "description": "I designed the user interface for a school calendar that organizes classes, schedules, and important details with a clear and accessible presentation.",
        "detailedDescription": "I developed the interface design for a digital school calendar, facilitating the visual management of classes, schedules, teachers, and breaks. The interface prioritizes clarity and ease of use, allowing students to quickly navigate between dates and obtain specific details for each subject, improving academic planning and user experience.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/school.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 23,
        "category": "ui",
        "imageSrc": "secure.png",
        "title": "Interface Design for Secure File Transfer Application",
        "description": "I designed the user interface for an app that allows sharing photos and files with encryption, ensuring privacy and ease of use.",
        "detailedDescription": "I developed the interface design for a mobile application focused on the secure and encrypted transfer of photos and files, integrating intuitive functionalities for sending and receiving content, secure key management, and private messaging, ensuring a friendly and protected user experience.",
        "button1": {
          "text_es": "Ver el diseño completo",
          "text_en": "View Full Design",
          "link": "./full/secure.pdf",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 24,
        "category": "videojuegos",
        "imageSrc": "felino.png",
        "title": "The Feline Game – Immersive Experience with Physical and Virtual 3D Projection",
        "description": "Innovative game that combines a real physical space with digital three-dimensional projections using two projectors, creating an immersive experience where the tangible and virtual interact in real-time.",
        "detailedDescription": "The Feline Game is an immersive experience that merges the physical and virtual environment through the use of two projectors that project three-dimensional images onto a physical structure. This combination allows players to interact with real and digital elements simultaneously, providing a unique sensation of depth and presence. Through advanced projection and synchronization technology, the game creates a space where the boundaries between the tangible and the virtual blur, offering an immersive multisensory experience. Users can explore and actively participate in an environment that blends art, technology, and gaming, ideal for educational, cultural, or recreational applications seeking to innovate in the way of interacting with digital content.",
        "button1": {
          "text_es": "Ver Video",
          "text_en": "View Video",
          "link": "./full/felino.mp4",
          "isVisible": true
        },
        "button2": {
          "text_es": "Ver el proyecto completo",
          "text_en": "View the full project",
          "link": "./full/felino.pdf",
          "isVisible": true
        },
        "warning": {
          "isVisible": false
        }
      },
      {
        "id": 25,
        "category": "software",
        "imageSrc": "perfectpay.png",
        "title": "Perfect Pay",
        "description": "Android application that facilitates splitting and managing shared expenses among multiple people.",
        "detailedDescription": "Perfect Pay is an Android application designed to simplify the division and management of shared expenses. It automatically calculates how much each participant should pay, avoiding confusion in situations like trips, dinners, or group purchases. It is currently in closed beta, with upcoming launch plans.",
        "button1": {
          "text_es": "Ver en la Tienda",
          "text_en": "View on Store",
          "link": "https://play.google.com/apps/testing/com.arxbite.perfectpay",
          "isVisible": true
        },
        "button2": {
          "isVisible": false
        },
        "warning": {
          "isVisible": false
        }
      }
    ]
  }
}

    function getInitialLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langFromUrl = urlParams.get('lang');
        const supportedLanguages = Object.keys(translations);
        return (langFromUrl && supportedLanguages.includes(langFromUrl)) ? langFromUrl : 'es';
    }

    currentLang = getInitialLanguage();

    function updateTexts() {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const keyPath = el.dataset.translate.split('.');
            let text = translations[currentLang];
            keyPath.forEach(key => text = text && typeof text[key] !== 'undefined' ? text[key] : el.dataset.translate);

            if (typeof text === 'string') {
                if (el.dataset.translate === 'pageTitle') document.title = text;
                else if (keyPath.includes('description') || keyPath.includes('linkedin')) el.innerHTML = text;
                else el.textContent = text;
            }
        });
        langToggle.textContent = currentLang === 'es' ? 'EN' : 'ES';
        
        if (document.getElementById('proyectos-section')?.classList.contains('active')) {
            renderProjects(document.querySelector('#proyectos-section .tab-button.active')?.dataset.filter || 'all');
        }
    }

    function setupModalButton(buttonElement, buttonData, lang) {
        if (buttonData && buttonData.isVisible && buttonData.link && buttonData[`text_${lang}`]) {
            buttonElement.href = buttonData.link;
            buttonElement.textContent = buttonData[`text_${lang}`];
            buttonElement.style.display = 'inline-block';
        } else {
            buttonElement.style.display = 'none';
        }
    }

    function openProjectModal(projectData) {
        modalProjectImage.src = projectData.imageSrc ? `images/${projectData.imageSrc}` : 'images/placeholder-project.png';
        modalProjectImage.alt = projectData.title || "Imagen del proyecto"; // Añadir un fallback para alt
        modalProjectTitle.textContent = projectData.title || "Título no disponible"; // Fallback

        // Asegurarse de que detailedDescription exista antes de intentar reemplazar
        if (projectData.detailedDescription) {
            modalProjectDetailedDescription.innerHTML = projectData.detailedDescription.replace(/\n/g, '<br>');
        } else {
            modalProjectDetailedDescription.innerHTML = 'Descripción detallada no disponible.'; // Fallback
        }

        setupModalButton(modalProjectButton1, projectData.button1, currentLang);
        setupModalButton(modalProjectButton2, projectData.button2, currentLang);
        
        // ==== LÓGICA PARA EL WARNING (ASEGÚRATE DE QUE ESTO ESTÉ ASÍ) ====
        if (projectData.warning && projectData.warning.isVisible && projectData.warning[`text_${currentLang}`]) {
            modalProjectWarning.textContent = projectData.warning[`text_${currentLang}`];
            modalProjectWarning.style.display = 'block'; // Muestra el elemento
        } else {
            modalProjectWarning.textContent = ''; // Limpia el texto si no hay warning o no es visible
            modalProjectWarning.style.display = 'none'; // Oculta el elemento
        }
        // ==================================================================
        
        projectModal.style.display = 'flex';
        setTimeout(() => projectModal.classList.add('active'), 10); // Pequeño delay para la transición CSS
        document.body.style.overflow = 'hidden'; // Evitar scroll del body cuando el modal está abierto
    }

    function closeProjectModal() {
        projectModal.classList.remove('active');
        setTimeout(() => projectModal.style.display = 'none', 300);
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (event) => {
        if (event.target === projectModal) {
            closeProjectModal();
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });

    function createProjectCard(project) {
        const card = document.createElement('button');
        card.classList.add('project-card');
        card.dataset.category = project.category;
        card.setAttribute('aria-label', `Ver detalles del proyecto ${project.title}`);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('project-image-container');
        if (project.imageSrc) {
            const actualImage = document.createElement('img');
            actualImage.src = `images/${project.imageSrc}`;
            actualImage.alt = ""; 
            actualImage.classList.add('project-image');
            actualImage.loading = 'lazy';
            imageContainer.appendChild(actualImage);
        } else {
            const placeholder = document.createElement('div');
            placeholder.classList.add('project-image-placeholder-fallback');
            placeholder.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
            imageContainer.appendChild(placeholder);
        }

        const content = document.createElement('div');
        content.classList.add('project-card-content');
        const titleEl = document.createElement('h3');
        titleEl.textContent = project.title;
        const descriptionEl = document.createElement('p');
        descriptionEl.textContent = project.description;
        content.appendChild(titleEl);
        content.appendChild(descriptionEl);

        card.appendChild(imageContainer);
        card.appendChild(content);

        card.addEventListener('click', () => {
            openProjectModal(project);
        });
        return card;
    }

    function renderProjects(filter = 'all') {
        if (!projectGrid) return;
        const projectsSource = translations[currentLang].projectsData;
        if (!projectsSource || projectsSource.length === 0) {
            projectGrid.innerHTML = `<p style='text-align:center;'>No hay proyectos para mostrar.</p>`;
            return;
        }
        projectGrid.innerHTML = ''; 
        const projectsToRender = projectsSource.filter(p => filter === 'all' || p.category === filter);
        if (projectsToRender.length === 0) {
             projectGrid.innerHTML = `<p style='text-align:center;'>No hay proyectos en la categoría seleccionada.</p>`;
        } else {
            projectsToRender.forEach(p => projectGrid.appendChild(createProjectCard(p)));
        }
    }

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        const url = new URL(window.location);
        url.searchParams.set('lang', currentLang);
        window.history.pushState({}, '', url);
        updateTexts();
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = link.dataset.section;
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                contentSections.forEach(s => s.classList.remove('active'));
                targetSection.classList.add('active');
                navLinks.forEach(nl => nl.classList.remove('active'));
                link.classList.add('active');
                if (window.location.hash !== `#${targetSectionId.replace('-section', '')}`) {
                    window.history.pushState(null, '', `#${targetSectionId.replace('-section', '')}`);
                }
                if (targetSectionId === 'proyectos-section') {
                    const activeTab = document.querySelector('#proyectos-section .tab-button.active');
                    if (!activeTab) {
                        tabButtons.forEach(btn => btn.classList.remove('active'));
                        document.querySelector('#proyectos-section .tab-button[data-filter="all"]')?.classList.add('active');
                    }
                    renderProjects(document.querySelector('#proyectos-section .tab-button.active')?.dataset.filter || 'all');
                }
            }
        });
    });

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            renderProjects(button.dataset.filter);
        });
    });

    function handleHashChange() {
        const hash = window.location.hash.substring(1);
        let targetSectionId = hash ? `${hash}-section` : 'inicio-section';
        if (hash && !document.getElementById(targetSectionId)) {
            targetSectionId = 'inicio-section';
        }
        const targetLink = document.querySelector(`.nav-link[data-section="${targetSectionId}"]`);
        if (targetLink) {
            navLinks.forEach(nl => nl.classList.remove('active'));
            targetLink.classList.add('active');
            contentSections.forEach(s => s.classList.remove('active'));
            document.getElementById(targetSectionId)?.classList.add('active');
            if (targetSectionId === 'proyectos-section') {
                 const activeTab = document.querySelector('#proyectos-section .tab-button.active');
                 if (!activeTab) {
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    document.querySelector('#proyectos-section .tab-button[data-filter="all"]')?.classList.add('active');
                }
                renderProjects(document.querySelector('#proyectos-section .tab-button.active')?.dataset.filter || 'all');
            }
        } else if (!document.querySelector('.content-section.active')) {
            document.getElementById('inicio-section').classList.add('active');
            document.querySelector('.nav-link[data-section="inicio-section"]')?.classList.add('active');
        }
    }

    // ---- INICIALIZACIÓN ----
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    updateTexts();
});
