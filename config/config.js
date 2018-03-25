let settings = function () { };


settings.SITE_URL = 'https://project25.herokuapp.com/';
settings.SECRET = process.env.SECRET_KEY;

//Mail Credentials
settings.MAIL_API_USER = 'hello@jobbunny.co';
settings.MAIL_API_KEY = 'asdlkjasdlkj123';
settings.MAIL_HOST = 'smtp.gmail.com';
settings.MAIL_PORT = 587

// Braintree Credentials
settings.BRAINTREE_MERCHANT_ID = '63fx8429457h347r';
settings.PUBLIC_KEY = 'pvgmyy347ptrm4c5';
settings.PRIVATE_KEY = '892573e01000aea0a9fd92c5d3eb3845';

settings.LIMIT = process.env.LIMIT;
settings.ALLOWED_IMAGE_FILES = ["jpg", "png", "jpeg"];

//Referal Carrot
settings.REFERRAL_CARROT_SENDER = 10;
settings.REFERRAL_CARROT_RECEIVER = 10;

module.exports = settings;

