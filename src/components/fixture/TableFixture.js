import React from "react";
import { BiSave } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import TextInputNumber from "../common/TextInputNumber";
import PropTypes from "prop-types";

const TableFixture = ({matches = [],  errors = {}, onChange, onSaveClick, activeItem={}, Group}) => {
  return (
    <>
        <table hidden={false} className="table table-striped table-bordered table-hover table-dark tableHeight">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {      
                    matches.map(match => {
                    var sCode = match.code;
                    var sClass = "class" + match.Group;
                    if(match.Group === Group){
                        return (
                        <tr className={sClass} key={match.code}>
                            
                            <td>{match.Fecha}</td>            
                            <td>
                            <div className="imageEquipo">
                                <img className={"imgFlag" + " imgFlag" + match.teamOne} ></img>              
                                <br></br>
                                <span>{match.EquipoL}</span>
                            </div>
                            </td>
                            <td>
                            <TextInputNumber
                                name="PrediccionTeamOne"
                                label=""
                                value={match.PrediccionTeamOne}
                                onChange={(event) => onChange(match,event)}
                                error={errors.category}
                                disabled={!match.habilitado}
                            />
                            </td>
                            <td>{match.GolEquipoL}</td>
                            <td>{match.GolEquipoV}</td>
                            <td>
                            <TextInputNumber
                                name="PrediccionTeamTwo"
                                value={match.PrediccionTeamTwo}
                                label=""
                                onChange={(event) => onChange(match,event)}
                                error={errors.category}
                                disabled={!match.habilitado}
                            />              
                            </td>
                            <td>
                            <div className="imageEquipo">
                                <img className={"imgFlag" + " imgFlag" + match.teamTwo} ></img>  
                                <br></br>
                                <span>{match.EquipoV}</span>
                            </div>
                            </td>
            
                            <td>
                            {
                            match.habilitado === true 
                            ? <Button onClick={() => onSaveClick(match)} variant="primary"><BiSave /></Button>
                            : <span><strong className="labelGreen">{match.ResultProde}</strong></span> 
                            }              
                            </td>
                            
                        </tr>
                        );
                    }})
                }
            </tbody>
        </table>
    </>
  )
};

TableFixture.propTypes = {
    matches: PropTypes.array.isRequired,
    errors: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onSaveClick: PropTypes.func.isRequired,
    activeItem: PropTypes.object
  };


export default TableFixture;