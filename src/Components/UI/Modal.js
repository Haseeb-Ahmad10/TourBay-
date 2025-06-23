// import React, { useEffect } from "react";
import classes from "./Modal.module.css"; 
// import Button from "./Button";

const Modal = function ({
  isOpen,
  onClose,
  title,
  description,
  image,
  imageAlt = "Modal image",
  children,
}) {

  if (!isOpen) return null;

  return (
    <div className={classes['modal-overlay']} onClick={onClose}>
      <div className={classes['modal-content']} onClick={(e) => e.stopPropagation()}>
        <button className={classes['modal-close-button']} onClick={onClose}>
          &times;
        </button>

        {image && (
          <div className={classes['modal-image-container']}>
            <img src={image} alt={imageAlt} className={classes['modal-image']} />
          </div>
        )}

        <div className={classes['modal-text-content']}>
          {title && <h2 className={classes['modal-title']}>{title}</h2>}
          {description && <p className={classes['modal-description']}>{description}</p>}
         {/* <Button onClick={onClose} className={classes['modal-close-button']}>close</Button> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;