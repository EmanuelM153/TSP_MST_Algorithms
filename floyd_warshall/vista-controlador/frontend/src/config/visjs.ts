import { DataSet, Network } from "vis-network/standalone";

const locales = {
  en: {
    edit: "Editar",
    del: "Borrar Seleccionado",
    back: "Atrás",
    addNode: "Agregar Nodo",
    addEdge: "Agregar Arista",
    editNode: "Editar Nodo",
    editEdge: "Editar Arista",
    addDescription: "Haz clic en un espacio vacío para colocar un nuevo nodo.",
    edgeDescription: "Haz clic en un nodo y arrastra el borde hasta otro nodo para conectarlos.",
    editEdgeDescription: "Haz clic en los puntos de control y arrástralos a un nodo para conectarlo.",
    createEdgeError: "No se pueden enlazar bordes a un clúster.",
    deleteClusterError: "Los clústeres no se pueden eliminar.",
    editClusterError: "Los clústeres no se pueden editar."
  },
};

export const options = { autoResize: true, locale: "en",
  locales: locales,
  height: "100%",
  nodes: {
    color: "#a855f7",
    fixed: false,
    font: "12px arial black",
    borderWidth: 0,
    scaling: { label: true },
    shadow: true,
  },
  layout: {
    hierarchical: false
  },
  physics: {
    solver: "forceAtlas2Based",
    stabilization: { iterations: 150 }
  },
  edges: {
    color: "#e879f9",
    font: { size: 10, face: "arial", vadjust: -5 }, // Adjusting label position closer to the edge
    smooth: { enabled: true, type: "continuous" }, // Adjust edge type to see if labels align better
    arrows: { to: { enabled: true, scaleFactor: 0.5 } }, // Optional: if arrows needed for directionality
  },
  interaction: {
    hover: true,
    multiselect: true,
    navigationButtons: true,
  },
};
