import { useParams } from "react-router-dom";

// Toujours mettre export devant variables ou fonctions
export const result = "Variable from Result Model";

// ############################
//    Start Model Project    //
// ############################

  // Get the Id from URL in useParams
  const { id, ids } = useParams();
  const idsArray = JSON.parse(ids);