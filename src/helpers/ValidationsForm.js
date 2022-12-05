const validationsForm = (form) => {
   let errors = {};
   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let regexComments = /^.{1,255}$/;

   if (!form.name.trim()) {
      errors.name = `El campo "Nombre" es Requerido`;
   } else if (!regexName.test(form.name.trim())) {
      errors.name = "El campo 'Nombre' solo acepta letras y espacios en blanco";
   }

   if (!form.email.trim()) {
      errors.email = `El campo "Email" es Requerido`;
   } else if (!regexEmail.test(form.email.trim())) {
      errors.email = `${form.email} no es "Email" valido`;
   }

   if (!form.subject.trim()) {
      errors.subject = `El campo "Subject" es Requerido`;
   }

   if (!form.comments.trim()) {
      errors.comments = `El campo "Comments" es Requerido`;
   } else if (!regexComments.test(form.comments.trim())) {
      errors.comment = 'El campo "Comments" recibe un maximo de 255 caracteres ';
   }

   return errors;
};