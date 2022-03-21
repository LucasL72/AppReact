import { useState } from "react";
import { useDispatch } from "react-redux";
import { editArticle } from "../store/actions/ArticlesActions";

const EditArticle = (props) => {
  const { item, toggler } = props;
  const [title, setTitle] = useState(item.title);
  const [description, setDesc] = useState(item.price);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    e.preventDefault();

    //important il faut remettre tout les champs de la data autrement il serait ecraser par un champ vide
    const editData = {
      title: title,
      description: description,
      id: item.id,
    };

    dispatch(editArticle(editData));
    toggler(false)
    // setEditToggle(false);
  };

  return (
    <form onSubmit={(e) => handleEdit(e)}>
      <input
        type="text"
        placeholder="Titre de l'article"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Prix de l'article"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />
      <input type="submit" value="valider modification" />
    </form>
  );
};

export default EditArticle;