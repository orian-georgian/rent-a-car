import Card from "./Card/Card";
import Loader from "./Loader/Loader";

function MainContent({
  cars,
  isLoading,
  loadingMessage,
  onDeleteItem,
  onSelectItem,
}) {
  const handleDeleteItem = (id) => {
    onDeleteItem(id);
  };

  const handleSelectItem = (id) => {
    onSelectItem(id);
  };

  return (
    <main className="cars-main-content">
      {isLoading && <Loader message={loadingMessage} />}
      {cars.map(({ title, price, imageUrl, id, selected }) => (
        <Card
          key={id}
          title={title}
          price={price}
          selected={selected}
          imageUrl={imageUrl}
          onDeleteItem={() => handleDeleteItem(id)}
          onSelectItem={() => handleSelectItem(id)}
        />
      ))}
    </main>
  );
}

export default MainContent;
