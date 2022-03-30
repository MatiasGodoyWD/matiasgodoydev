import React, { useState, useEffect } from "react";
import Input from "../../components/Input/Input";
import "./Contact.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { schema } from "../../helpers/schema";

const Contact = () => {
  const [isValid, setIsValid] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsValid(true);
    reset({ email: "", fullName: "", msg: "" });
  };
  useEffect(() => {
    let interval;
    interval = setTimeout(() => {
      setIsValid(false);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [isValid]);

  return (
    <>
      <section className="contact" id="contact">
        <div className="filler"></div>
        <form
          className="contact__form"
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="title-modifier">Contacto</h2>
          <div className="underscore-modifier"></div>
          <h3 class="form__title">¿Querés que trabajemos juntos?</h3>
          <Input
            control={control}
            name="fullName"
            className="form__input"
            error={errors.fullName}
            id="form__name"
            label="Nombre Completo"
            placeholder="Ingrese su nombre completo..."
            type="text"
          />
          <Input
            control={control}
            name="email"
            className="form__input"
            error={errors.email}
            id="form__email"
            label="E-mail"
            placeholder="Ingrese su email..."
            type="text"
          />
          <Input
            control={control}
            name="msg"
            className="form__textarea"
            error={errors.msg}
            id="textarea"
            label="Mensaje"
            placeholder="Ingrese su mensaje..."
            textArea
          />
          <button className="form__submit">Enviar</button>
          {isValid && (
            <span id="form__confirmation">
              <FontAwesomeIcon icon={faCheck} />
              Su mensaje se ha enviado con exito
            </span>
          )}
        </form>
      </section>
    </>
  );
};

export default Contact;
