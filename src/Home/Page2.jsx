import React from 'react';
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

export default function Page2() {
  return (
    <OverPack component="section" className="page-wrapper page2">
      <QueueAnim
        type="bottom"
        className="page text-center"
        leaveReverse
        key="page"
      >
        <h2 key="title">Master Project Company</h2>
        <span key="line" className="separator" />
        <QueueAnim type="bottom" className="info-content" key="content">
          <p className="main-info" key="1">Master Project se creo para crear soluciones innovadoras sobre IoT.</p>
          <p className="main-info" key="2">Nuestro enfoque es que la mayoria de personas prueba disfrutar de los beficiones de IoT, ofriendo servicios accesibles para la comunidad.</p>
        </QueueAnim>
      </QueueAnim>
    </OverPack>);
}
