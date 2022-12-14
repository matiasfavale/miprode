import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import SelectInput from "../common/SelectInput";
import PropTypes from "prop-types";
import TextInputChamp from "../common/TextInputChamp";

const ChampionModalPage = ({
  champion,
  habilitado,
  teams,
  onShow,
  onClose,
  show,
  onChange,
  onSave,
  saving = false,
  errors = {},
  championFin,
  resultadoChampion
}) => {
  return (
    <>
      
      <Button onClick={onShow} variant="secondary">Elegir Campeon</Button>
      <br></br>
      <div className="text-center">
      
        <img className={"rounded imgFlagSelect" + " imgFlag" + champion.teamSelect} ></img>
        <br></br>   
        {
        resultadoChampion === -1
        ? <span></span> 
        : resultadoChampion > 0
        ? <span><strong className="labelGreen">+{resultadoChampion}</strong></span> 
        : <span><strong className="labelRed">X</strong></span> 
        }  
      </div>
      <br></br>
      <div className="text-center">
      
        {
       championFin !== "" 
        ? <div>
            <img className={"rounded imgFlagSelect" + " imgFlagCOPA"} ></img>
            <img className={"rounded imgFlagSelect" + " imgFlag" + championFin} ></img>
            <img className={"rounded imgFlagSelect" + " imgFlagCOPA"} ></img>
          </div>
        : <span></span> 
        }        
      </div>
      <br></br>
      <Modal show={show} onHide={onClose} dialogClassName="modal-90w">
        <Modal.Header closeButton className="fondoClass">
          <Modal.Title className="labelFont">Elegir tu Campeon</Modal.Title>
        </Modal.Header>
        <Modal.Body className="fondoClass">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="labelFont">Equipos</Form.Label>
              {
                habilitado ?
                <SelectInput 
                  name="teamSelect"
                  label=""
                  value={champion.teamSelect || ""}
                  defaultOption="Select Champion"
                  options={teams.map(team => ({
                    value: team.code,
                    text: team.name
                  }))}
                  onChange={onChange}
                  error={errors.champion}
                />
                :
                <TextInputChamp
                  name="teamSelect"
                  label=""
                  placeholder="Campeon"
                  value={champion.teamSelect || ""}
                  disabled={!champion}
                />
              }   
              
              <br></br>
              <div className="text-center">
              
                <img className={"rounded imgFlagSelect" + " imgFlag" + champion.teamSelect} ></img>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="fondoClass">
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
          <Button  hidden={!habilitado} variant="primary" onClick={onSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ChampionModalPage.propTypes = {
  teams: PropTypes.array.isRequired,
  errors: PropTypes.object,
  onShow: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default ChampionModalPage;

