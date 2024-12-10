export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">Start adding some Items to your packing list 🛩️</p>
    );
  const numberItem = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentageItem = Math.round((packedItems / numberItem) * 100);

  return (
    <footer className="stats">
      <em>
        {percentageItem === 100 ? (
          <p> you got everything! ready to go ✈️</p>
        ) : (
          `you have ${numberItem} items on your list, and you already packed ${" "}${packedItems} (${percentageItem}%)`
        )}
      </em>
    </footer>
  );
}
