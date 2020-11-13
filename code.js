$(document).ready(
    function () {
        //add all event listener (clicks, etc.)
        var myRules =
            {
                height:
                    {
                        required: true,
                        number: true,
                        min: 59,
                        max: 79
                    },
                weight:
                    {
                        required: true,
                        number: true,
                        min: 88,
                        max: 353
                    }
            };
        var myMessages =
            {
                height:
                    {
                        required: "Fill this in!",
                        number: "Please enter a number",
                        min: "Too short",
                        max: "Too tall"
                    },
                weight:
                    {
                        required: "Fill this in!",
                        number: "Please enter a number",
                        min: "Too light",
                        max: "Too heavy"
                    }

            };

        //any other functions (calculate trip, roll die, etc.)
        function calculateBMI()
        {
            var height = $("#height").val();
            var weight = $("#weight").val();
            var calculateBmi = (weight / (height * height)) * 703;
            var weightStatus = "";

            if(calculateBmi < 18.5)
            {weightStatus = "underweight";}
            else if(calculateBmi >= 18.5 && calculateBmi <= 24.9)
            {weightStatus = "healthy";}
            else if(calculateBmi >= 25.0 && calculateBmi <= 29.9)
            {weightStatus = "overweight";}
            else
            {weightStatus = "obese";}

            $("#bmiOutput").text(`Your BMI is ${calculateBmi.toFixed(1)} which means you're ${weightStatus}`);

        }
        $("form").validate(
            {
                submitHandler: calculateBMI,
                rules: myRules,
                messages: myMessages
            }
        );
    }
);