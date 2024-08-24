var form = document.getElementById('form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var weightInput = document.getElementById('weight');
        var heightInput = document.getElementById('height');
        var valueElement = document.getElementById('value');
        var infosElement = document.getElementById('infos');
        var descriptionElement = document.getElementById('description');
        if (weightInput && heightInput && valueElement && infosElement && descriptionElement) {
            var weight = parseFloat(weightInput.value);
            var height = parseFloat(heightInput.value);
            if (!isNaN(weight) && !isNaN(height) && height > 0) {
                var imc = (weight / (height * height)).toFixed(2);
                var description = '';
                infosElement.classList.remove('hidden');
                if (parseFloat(imc) < 18.5) {
                    description = 'Abaixo do peso! É importante se alimentar de forma nutritiva e procurar um nutricionista.';
                }
                else if (parseFloat(imc) >= 18.5 && parseFloat(imc) < 24.9) {
                    description = 'Peso normal! Mantenha uma dieta equilibrada e pratique exercícios físicos.';
                }
                else if (parseFloat(imc) >= 25 && parseFloat(imc) < 29.9) {
                    description = 'Sobrepeso! Adote hábitos saudáveis e consulte um nutricionista para te ajudar.';
                }
                else if (parseFloat(imc) >= 30 && parseFloat(imc) < 34.9) {
                    description = 'Obesidade grau 1! Procure um nutricionista para orientação.';
                }
                else if (parseFloat(imc) >= 35 && parseFloat(imc) < 39.9) {
                    description = 'Obesidade grau 2! Procure ajuda médica especializada para tratar a obesidade.';
                }
                else {
                    description = 'Obesidade grau 3! Procure ajuda médica especializada para tratar a obesidade.';
                }
                valueElement.textContent = imc.replace('.', ',');
                descriptionElement.textContent = description;
            }
        }
    });
}
