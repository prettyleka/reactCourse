import HOME from "../../app/shared/HOME";

export const selectAllPictures = () => {
    return HOME;
};

export const selectHomePictureById = (id) => {
    return HOME.find((HOME) => HOME.id === parseInt(id));
};

export const selectDescriptionHomePicture=()=>{
    return HOME.find((HOME) => HOME.description);
}