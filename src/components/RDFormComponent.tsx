import React, { useEffect } from "react";

type RDFormComponentProps = {
  id: string;
};

export const RDFormComponent = ({ id }: RDFormComponentProps) => {
  useEffect(() => {
    // Função para tentar criar o formulário
    const createRDForm = () => {
      // @ts-ignore
      if (window["RDStationForms"]) {
        // @ts-ignore
        new window["RDStationForms"](id, "UA-241031435-2").createForm();
      } else {
        // Se RDStationForms ainda não estiver disponível, tente novamente após um breve delay
        setTimeout(createRDForm, 500);
      }
    };

    // Função para carregar o script do RD Station
    const loadRDStationScript = () => {
      const script = document.createElement("script");
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.onload = () => createRDForm();
      document.body.appendChild(script);
    };

    loadRDStationScript();
  }, []);

  return <div role="main" id={id}></div>;
};
