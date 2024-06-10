function toggleSettingsMenu() {
  const settingsMenu = document.getElementById('settingsMenu');
  if (settingsMenu.style.display === 'block') {
    settingsMenu.style.display = 'none';
  } else {
    settingsMenu.style.display = 'block';
  }
}

function changeLanguage(language) {
  document.documentElement.lang = language;
}

function changeFont(font) {
  document.documentElement.setAttribute('data-font', font);
  document.body.style.fontFamily = font;
}

const translations = {
  es: {
    navInicio: "INICIO",
    navCatalogo: "CATÁLOGO",
    navInfoGeneral: "INFORMACIÓN GENERAL",
    navNuestroEquipo: "NUESTRO EQUIPO",
    configuracion: "Configuración",
    carrito: "Carrito",
    perfil: "Perfil",
    footerContactanos: "CONTACTANOS",
    footerWebsite: "WWW.JASSBOWLING.COM",
    footerComunicacion: "COMUNICATE CON NOSOTROS",
    footerEmail: "JASSBOWLING@GMAIL.COM",
    footerWhatsapp: "WHATSAPP",
    footerTelefono: "3006683032"
  },
  en: {
    navInicio: "HOME",
    navCatalogo: "CATALOG",
    navInfoGeneral: "GENERAL INFORMATION",
    navNuestroEquipo: "OUR TEAM",
    configuracion: "Settings",
    carrito: "Cart",
    perfil: "Profile",
    footerContactanos: "CONTACT US",
    footerWebsite: "WWW.JASSBOWLING.COM",
    footerComunicacion: "COMMUNICATE WITH US",
    footerEmail: "JASSBOWLING@GMAIL.COM",
    footerWhatsapp: "WHATSAPP",
    footerTelefono: "3006683032"
  },
  fr: {
    navInicio: "ACCUEIL",
    navCatalogo: "CATALOGUE",
    navInfoGeneral: "INFORMATIONS GÉNÉRALES",
    navNuestroEquipo: "NOTRE ÉQUIPE",
    configuracion: "Paramètres",
    carrito: "Panier",
    perfil: "Profil",
    footerContactanos: "CONTACTEZ-NOUS",
    footerWebsite: "WWW.JASSBOWLING.COM",
    footerComunicacion: "COMMUNIQUEZ AVEC NOUS",
    footerEmail: "JASSBOWLING@GMAIL.COM",
    footerWhatsapp: "WHATSAPP",
    footerTelefono: "3006683032"
  },
  pt: {
    navInicio: "INÍCIO",
    navCatalogo: "CATÁLOGO",
    navInfoGeneral: "INFORMAÇÕES GERAIS",
    navNuestroEquipo: "NOSSA EQUIPE",
    configuracion: "Configurações",
    carrito: "Carrinho",
    perfil: "Perfil",
    footerContactanos: "CONTATE-NOS",
    footerWebsite: "WWW.JASSBOWLING.COM",
    footerComunicacion: "COMUNIQUE-SE CONOSCO",
    footerEmail: "JASSBOWLING@GMAIL.COM",
    footerWhatsapp: "WHATSAPP",
    footerTelefono: "3006683032"
  }
};

function changeLanguage(language) {
  document.documentElement.lang = language;
  
  const translation = translations[language];
  if (translation) {
    document.getElementById('navInicio').textContent = translation.navInicio;
    document.getElementById('navCatalogo').textContent = translation.navCatalogo;
    document.getElementById('navInfoGeneral').textContent = translation.navInfoGeneral;
    document.getElementById('navNuestroEquipo').textContent = translation.navNuestroEquipo;
    document.getElementById('settingsTitle').textContent = translation.configuracion;
    document.getElementById('navCart').textContent = translation.carrito;
    document.getElementById('navProfile').textContent = translation.perfil;
    document.getElementById('footerContactanos').textContent = translation.footerContactanos;
    document.getElementById('footerWebsite').textContent = translation.footerWebsite;
    document.getElementById('footerComunicacion').textContent = translation.footerComunicacion;
    document.getElementById('footerEmail').textContent = translation.footerEmail;
    document.getElementById('footerWhatsapp').textContent = translation.footerWhatsapp;
    document.getElementById('footerTelefono').textContent = translation.footerTelefono;
  }
}
