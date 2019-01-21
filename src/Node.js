import React from 'react';
import './Node.css';

const Node = ({ className, node }) => (
  <div className="node__wrapper">
    {
      node
        ? <div className={ `node__value ${className}` }>
          { node.value }
          { node.left && node.right &&
            <div className="node__branch-wrapper">
              <Node
                className="node__left"
                node={ node.left }
              />
              <Node
                className="node__right"
                node={ node.right }
              />
            </div>
          }
        </div>
        : null
    }
  </div>
);

export default Node;
