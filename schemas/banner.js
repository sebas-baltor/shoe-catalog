export default {
  name: "banner",
  title: "Baner",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Imagen del Baner",
      type: "image",
      opions: {
        hostpot: true,
      },
      description: "Recomendamos que sea .png",
    },
    {
      name: "title",
      title: "Titulo del Baner",
      type: "string",
      description: "El titulo detras de la imagen",
    },
    {
      name: "description",
      title: "Descripcion",
      type: "text",
      description: "Que quieres que la gente sepa",
    },
    {
      name: "shoe_model",
      title: "Nombre del modelo",
      type: "string",
    },
    {
      name: "features",
      title: "Tus mejores productos",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {
              type: "shoe",
            },
          ],
        },
      ],
      description: "Recomendamos solo dos productos",
    },
  ],
};
