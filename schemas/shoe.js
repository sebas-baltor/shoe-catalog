export default {
  name: "shoe",
  title: "Zapatos",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nombre",
      type: "string",
      description: "Nombre del producto",
    },
    {
      name: "description",
      title: "Descripcion",
      type: "text",
      description: "Caracteristicas del producto",
    },
    {
      name: "shoes_images",
      title: "Imagenes",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "Todas las imagenes del producto",
    },
    {
      name: "price",
      title: "Precio",
      type: "number",
      description: "Precio en enteros o decimales",
    },
    {
      name: "types",
      title: "Tipo de zapato",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "shoe_type" }],
        },
      ],
      description: "Todas las categorias a las que puede entrar este zapato",
    },
    {
      name: "gender",
      title: "Genero",
      type: "reference",
      to: [{ type: "gender" }],
      descripton: "El genero para el cual va dirigido",
    },
    {
      name: "size",
      title: "Tallas",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "size" }],
        },
      ],
    },
  ],
};
