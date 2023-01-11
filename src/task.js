const task = (item) => {

    this.title = item.title;
    this.description = item.description;

    const getTitle = () => {
        return title;
    }

    const getDesription = () => {
        return description;
    }

    const setTitle = (temp) => {
        title = temp;
    }

    const setDescription = (temp) => {
        description = temp;
    }


    return {getTitle, getDesription, setDescription, setTitle};
};

export { task };