import React, { Component } from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import 'bootstrap/dist/css/bootstrap.css';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FaFilePdf } from "react-icons/fa";

// import { encabezadoInforme } from '../Complementos/HeaderInformes'
// import { logoSigobras, logoGRPuno} from '../Complementos/ImgB64'



class Report_9 extends Component {
  constructor(){
    super()
    this.state = {
      DataHistorial:[],
      ValPresupuesto:[],
      modal: false,
      DataEncabezado:[]
    }

    this.ModalReportes = this.ModalReportes.bind(this)
    this.PruebaDatos = this.PruebaDatos.bind(this)
    this.Valprincipal = this.Valprincipal.bind(this)

  }

  
  ModalReportes() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  PruebaDatos(){
    var DataHist = this.state.DataHistorial
    // console.log('DH', DataHist)

    var ValPresupuesto = []
        ValPresupuesto.push (
            {
                style: 'tableExample',
                // color: '#ff0707',
                layout: 'lightHorizontalLines',
      
                table: {
                  widths: ["*","*","*"],
                    body: [
                        [
                          {
                          
                          text: 'AVANCE ACUMULADO %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {                          
                          text: 'CHART',
                          style: "tableHeader",
                          alignment: "center",
                          rowSpan: 3
                          }
                        ],
                        [
                          {
                          
                          text: 'PRESUPUESTO TOTAL S/.132132.55',
                          style: "tableHeader",
                          alignment: "center",
                          
                          }
                        ],
                        [
                          {
                          
                          text: 'COSTO DIRECTO S/.4856.99',
                          style: "tableHeader",
                          alignment: "center"
                          }
                        ]                    
                      ]
                },
                table: {
                  widths: ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"],
                    body: [
                        [
                          {
                          
                          text: 'TIEMPO',
                          style: "tableHeader",
                          alignment: "center",
                          colSpan: 4,
                          },
                          {
                        
                          },
                          {
                          
                          },
                          {
                          
                          },
                          {
                          
                          text: 'PROGRAMADO',
                          style: "tableHeader",
                          alignment: "center",
                          colSpan: 4,
                          },
                          {
                          
                          },
                          {
                        
                          },
                          {
                          
                          },
                          {
                          text: 'EJECUTADO',
                          style: "tableHeader",
                          alignment: "center",
                          colSpan: 5,
                          },
                          {
                          
                          },
                          {
                          
                          },
                          {
                        
                          },
                          {
                          
                          },
                          {
                          
                          text: 'FINANCIERO',
                          style: "tableHeader",
                          alignment: "center",
                          colSpan: 4,
                          },
                          {
                          
                          },
                          {
                        
                          },
                          {
                          
                          },
                          {

                          }                   
                        ],
                        [
                          {
                          
                          text: 'MES',
                          style: "tableHeader",
                          alignment: "center",
                          colSpan: 4,
                          },
                          {
                          text: 'FECHA DE INICIO',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'DAIS PARCIAL',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'DIAS ACUMULADOS',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          
                          text: 'AVANCE MENSUAL PROGRAMADO',
                          style: "tableHeader",
                          alignment: "center"
                          
                          },
                          {
                          text: 'AVANCE ACUMULADO MENSUAL PROGRAMADO',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL PROGRAMADO EN %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL ACUMULADO PROGRAMADO EN %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL EJECUTADO',
                          style: "tableHeader",
                          alignment: "center"
                          
                          },
                          {
                          text: 'AVANCE MENSUAL ACUMULADO EJECUTADO',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL EJECUTADO EN %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL ACUMULADO EJECUTADO EN %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'DESVIACION DE EJECUCION FISICA',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          
                          text: 'AVANCE MENSUAL FINANCIERO',
                          style: "tableHeader",
                          alignment: "center"
                          
                          },
                          {
                          text: 'AVANCE MENSUAL ACUMULADO FINANCIERO',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL FINANCIERO EN %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'AVANCE MENSUAL ACUMULADO FINANCIERO EN %',
                          style: "tableHeader",
                          alignment: "center"
                          },
                          {
                          text: 'DESVIACION DE EJECUCION FINANCIERA',
                          style: "tableHeader",
                          alignment: "center"
                          }                    
                        ]
                    ] 
            
            }}
        
        )
    
    // var ValPresupuesto = ArFormat.length -1
    // delete ArFormat[ultimoElemento].pageBreak
    // // console.log(ArFormat)
    this.setState({
        ValPresupuesto,
        // DataEncabezado:encabezadoInforme()
    })
    
  }

  Valprincipal(){
    var { ValPresupuesto, DataEncabezado } = this.state
    this.PruebaDatos()

    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    pdfmake.vfs = pdfFonts.pdfMake.vfs;

    var docDefinition = {
    //   header:{
        
    //     columns: [
    //       {
    //         image: logoGRPuno,
    //         fit: [280, 280],
    //         margin: [45, 12, 10, 0]
    //       },
    //       {
    //         alignment: 'right',
    //         image: logoSigobras,
    //         width: 40,
    //         height: 30,
    //         margin: [20, 10, 10, 0]
            
    //       }
    //     ]
    //   },
      
    //   footer: function(currentPage, pageCount) { 
    //     return {
    //       columns: [
    //         {
    //           text: currentPage.toString() + ' de ' + pageCount,
    //           margin: [45, 10, 10, 0],
    //           fontSize: 9,
    //         },
    //         {
    //           qr: 'http://sigobras.com',
    //           fit: 40,
    //           alignment: 'right',
    //           margin: [20, 10, 10, 0]
    //         }
    //       ]
          
    //     }
    //   },
       
      content: [
        { 
          text: 'VALORIZACION PRESUPUESTO BASE DE OBRA N° 02 - 2018 ',
          margin: 7,
          alignment: 'center'
        },

        // DataEncabezado,
        ValPresupuesto
      ],


      styles: {
        header: {
          fontSize: 7,
          bold: true,
          margin: [0, 0, 0, 5]
        },
        subheader: {
          fontSize: 10,
          bold: true,
          margin: [0, 10, 0, 5]
        },
        tableExample: {
          margin: [0, 5, 0, 10]
        },
        tableHeader: {
          bold: true,
          fontSize: 5.5,
          color: '#000000',
          fillColor: '#ffcf96',
        },
        tablaValorizacion: {
            fontSize: 4.5,
            bold: false,
            color: '#000000',
          },
        tableFecha: {
          bold: true,
          fontSize: 7,
          color: '#000000',
          fillColor: '#dadada',
        },
        tableBody: {
          // bold: true,
          fontSize: 6,
          color: '#000000',
          // fillColor: '#f6f6ff',
        },
        TableHeaderInforme: {
          bold: true,
          fontSize: 9,
          color: '#000000',
          // fillColor: '#ffcf96',
        },
        tableBodyInforme:{
          fontSize: 9,
          color: '#000000',
        }
        

      },
      defaultStyle: {
        // alignment: 'justify'
      },
      pageSize: 'A4',
      pageOrientation: 'landscape',

    };
    // pdfmake.createPdf(docDefinition)
    var pdfDocGenerator = pdfmake.createPdf(docDefinition);

    pdfDocGenerator.getDataUrl((dataUrl) => {
        const targetElement = document.getElementById('iframeContainer');
        const iframe = document.createElement('iframe');
        iframe.src = dataUrl;
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.frameBorder = 0;

        targetElement.appendChild(iframe);
    });
  
  }

  render() {
    return (
      <div>
        <li className="lii">
          <a href="#" onClick={this.Valprincipal} ><FaFilePdf className="text-danger"/>2.- VALORIZACIÓN PRINCIPAL DE LA OBRA-PRESUPUESTO BASE ✔</a>
        </li>

        
        <Modal isOpen={this.state.modal} fade={false} toggle={this.makePdf} size="xl">
          <ModalHeader toggle={this.ModalReportes}>Genera PDF </ModalHeader>
          <ModalBody>
            <div id="iframeContainer" style={{height: 'calc(100vh - 50px)'}}></div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

render (<Report_9/>,document.getElementById("root")) ;