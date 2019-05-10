import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Smart Farming</h2>
              <div>
                <a target="_blank " href="#">
                  Automatización de regadio bajo algoritmo matemático
                </a>
              </div>
              <div>
                <a target="_blank " href="#">
                  Optimización de agua.
                </a>
              </div>
              <div>
                <a href="#"></a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Smart Cities</h2>
              <div>
                <a href="#">SmarThink</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#"></a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#"></a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Automatización</h2>
              <div>
                <a href="#">Control de procesos industriales</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">PLC & DCS</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">HMI</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Domótica</h2>
              <div>
                <a href="#"></a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Seguridad domiciliaría</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Automatización y control de hogar</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#"></a>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                Aplicación móviles y web
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="#">SmarThink</a>
                <span> - </span>
                <span></span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">Thinger.Io</a>
                <span> - </span>
                <span></span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              e-mail
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              christian.acero@masterprojectperu.com
            </a>
          </span>
          <span style={{ marginRight: 12 }}>Master Project Company</span>
          <span style={{ marginRight: 12 }}>Copyright Todos los derechos reservados</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
