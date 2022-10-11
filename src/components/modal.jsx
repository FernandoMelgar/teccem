import * as React from "react";

export default function Modal(props) {
  return (
    <div>
      <input type="checkbox" id={props.modalId} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="flex justify-end sticky right-2 top-2">
            <label
              htmlFor={props.modalId}
              className="btn sticky btn-sm btn-circle">
              ✕
            </label>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}


export function ModalGlass(props) {
  return (
    <div>
      <input type="checkbox" id={props.modalId} className="modal-toggle" />
      <div className="modal">
        <div className="glass modal-box w-11/12 max-w-5xl">
          <div className="flex justify-end sticky right-2 top-2">
            <label
              htmlFor={props.modalId}
              className="btn sticky btn-sm btn-circle">
              ✕
            </label>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}


