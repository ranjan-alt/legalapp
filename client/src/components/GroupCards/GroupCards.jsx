import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import CardUi from "../CardUi/CardUi";

const Groupcards = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newCard = { title, description };

    setCards([...cards, newCard]);
    setDescription("");
    setTitle("");
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 style={{ color: "white" }}>Cards</h1>
      <button onClick={openModal}> Create Card</button>
      <div>
        {cards.map((card, index) => (
          <CardUi title={card.title} description={card.description} />
        ))}
      </div>

      <Modal show={isModalOpen} onHide={() => setIsModalOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Groups</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Groupcards;
