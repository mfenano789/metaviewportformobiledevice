$(document).ready(function(){
    //initialize form validationon the registration form
    //the form has the name attribute as "registration"
    $("form[name='registration']").validation({
      //specify the validation rules
      rule: {
        //the key name on the left side is the name of the attribute
        //validation rules are defined on the right side
        firstname:"required",
        lastname:"required",
        email:{
          required:true,
          //specify that email should be validated by the built-in "email" rule
          email:true
        },
        password:{
          required: true,
          minlength: 5
        }
      },
      //specify validation messages
      messages:{
        firstname:"Please enter your firstname",
        lastname:"Please enter your lastname",
        password:{
          required:"Please enter a password",
          minlength:"Password mudt be atleast 5 characters long"
        },
        email:"Please enter a valid email address"
      },
      //submit the form
      submitHandler:function(form){
        form.submit();
      }
    })
  })