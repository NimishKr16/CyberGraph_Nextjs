'use client';  // Mark this as a client component to use React hooks

import { useEffect, useRef } from 'react';
import Cytoscape from 'cytoscape';
import cybersecurity_graph_dummy_data from '../data/cybersecurity_graph_dummy_data'; // Adjust the path as necessary

const Graph = () => {
  const cyRef = useRef(null);

  useEffect(() => {
    const data = cybersecurity_graph_dummy_data[0]; // Assuming we're using the first session for simplicity
    const elements = [];

    // Iterate over agents to add nodes and connections
    data.agents.forEach(agent => {
      // Add agent node
      elements.push({
        data: { id: agent.idx, label: agent.name, output: agent.output }
      });

      // Add tool nodes and edges (tools are connected to agents)
      agent.tools.forEach(tool => {
        elements.push({
          data: { id: tool.idx, label: tool.name, output: tool.output }
        });

        // Create edge between agent and tool
        elements.push({
          data: {
            source: agent.idx,
            target: tool.idx,
            label: `Tool used: ${tool.name}`,
          }
        });
      });

      // Add agent-to-agent connections (relations)
      agent.connections.forEach(conn => {
        elements.push({
          data: {
            source: agent.idx,
            target: conn.target_idx,
            label: `${conn.relation}: ${conn.description}`,
          }
        });
      });
    });

    // Iterate over edges to create relationships between agents (these are separate edges)
    data.edges.forEach(edge => {
      elements.push({
        data: {
          source: edge.source_idx,
          target: edge.target_idx,
          label: `${edge.relation}: ${edge.description}`,
        }
      });
    });

    // Initialize Cytoscape with the formatted data
    const cy = Cytoscape({
      container: cyRef.current,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': '#0074D9',
            'label': 'data(label)',
            'color': '#fff',
            'text-valign': 'center',
            'text-halign': 'center',
            'width': '80px',
            'height': '80px'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 3,
            'line-color': '#ccc',
            'label': 'data(label)',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        }
      ],
      layout: {
        name: 'circle',
        padding: 10
      }
    });

    // Handle node click events to show more info
    cy.on('tap', 'node', (event) => {
      const nodeData = event.target.data();
      alert(`Node Info: ${nodeData.label} - ${nodeData.output}`);
    });

    return () => {
      cy.destroy(); // Cleanup Cytoscape when the component unmounts
    };
  }, []);

  return (
    <div id="cy" ref={cyRef} style={{ width: '100%', height: '600px' }}></div>
  );
};

export default Graph;