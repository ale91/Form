$(function(){
    $('.submit-btn').click(function(event){
        event.preventDefault();
        var inputs = $('input');
        var select = $('select');
        var isError = false;
        $('.error-data').remove();
        for (var i = 0; i < inputs.length; i++){
            var input = inputs[i];
            if ($(input).hasClass('required') && !validateRequired($(input).val())){
                addErrorData($(input), "Compila il campo obbligatorio");
                isError = true;
            }
        }

        if($(select).hasClass('required') && ($(select).val()=='default')){
            addErrorData($(select), "Compila il campo obbligatorio");
            isError = true;
        }

        if (isError === false){
            $('#webform').submit();
        }
    });
});

function validateRequired(value){
    if ((value == "")) {return false}
    return true;
}
    function addErrorData(element, error) {
        element.after("<div class='error-data'>" + error + "</div>");
    }