import styles from "./EntryDate.module.css";

const EntryDate = ({
  entryDate = "",
  updateDate = "",
}: {
  entryDate?: string;
  updateDate?: string;
}) => {
  const entry = new Date(entryDate);
  const entryDateString = entry.toLocaleDateString();
  const entryTimeString = entry.toLocaleTimeString();

  const updated = new Date(updateDate);
  const updatedDateString = updated.toLocaleDateString();
  const updatedTimeString = updated.toLocaleTimeString();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      {updateDate && (
        <h4>
          Last updated {updatedDateString} {updatedTimeString}
        </h4>
      )}
      <h3>
        {entryDateString} {entryTimeString}
      </h3>
    </div>
  );
};

export default EntryDate;
