import React from 'react';
import { Button } from 'antd';

export default function Header(props) {
  return (
    <header {...props}>
      <a className="logo-wrapper" href="#" target="_blank">
        <i className="logo" />
        <span>Master Project</span>
      </a>
      <div className="button">
        <Button>Ingresar</Button>
      </div>
    </header>
  );
}
