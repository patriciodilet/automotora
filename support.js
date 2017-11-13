module.exports = function (session) {
    // Generate ticket
    var tickerNumber = Math.ceil(Math.random() * 20000);

    // Reply and return to parent dialog
    session.send('Su mensaje \'%s\' fue registrado. Te hablaremos en cuanto tengamos una respuesta.', session.message.text);
    
    session.send('Gracias por contactarnos. Tu ticket es %s.', tickerNumber);

    session.endDialogWithResult({
        response: tickerNumber
    });
};