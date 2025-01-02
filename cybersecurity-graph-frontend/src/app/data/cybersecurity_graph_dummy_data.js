const cybersecurity_graph_dummy_data = [
  {
    "session_id": "session_001",
    "timestamp": "2024-12-29T19:52:57.546976",
    "query": "Query example 1",
    "agents": [
      {
        "idx": "agent_001_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "",
          "created_at": "2024-12-20T19:52:57.546800",
          "updated_at": "2024-12-03T19:52:57.546817"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_001_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-03T19:52:57.546839"
            }
          },
          {
            "idx": "tool_001_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.546858"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_001_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.92
          },
          {
            "target_idx": "agent_001_2",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.45
          }
        ]
      },
      {
        "idx": "agent_001_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "20s",
          "error_log": "Sample error message",
          "created_at": "2024-12-08T19:52:57.546899",
          "updated_at": "2024-12-06T19:52:57.546904"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_001_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-29T19:52:57.546918"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_001_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.6
          },
          {
            "target_idx": "agent_001_2",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.52
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_001_2",
        "target_idx": "agent_001_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-18T19:52:57.546946"
        }
      },
      {
        "source_idx": "agent_001_1",
        "target_idx": "agent_001_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-24T19:52:57.546958"
        }
      },
      {
        "source_idx": "agent_001_2",
        "target_idx": "agent_001_2",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-12T19:52:57.546969"
        }
      }
    ],
    "response": "Final response for query 1",
    "total_tokens": 1631,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.224",
      "destination_ip": "10.0.0.174",
      "user_id": "user_90"
    }
  },
  {
    "session_id": "session_002",
    "timestamp": "2024-12-16T19:52:57.547216",
    "query": "Query example 2",
    "agents": [
      {
        "idx": "agent_002_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "17s",
          "error_log": "Sample error message",
          "created_at": "2024-12-22T19:52:57.547000",
          "updated_at": "2025-01-01T19:52:57.547006"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_002_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-04T19:52:57.547020"
            }
          },
          {
            "idx": "tool_002_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-13T19:52:57.547035"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_002_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.62
          }
        ]
      },
      {
        "idx": "agent_002_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "20s",
          "error_log": "Sample error message",
          "created_at": "2024-12-13T19:52:57.547059",
          "updated_at": "2024-12-04T19:52:57.547064"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_002_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.547079"
            }
          },
          {
            "idx": "tool_002_2_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-21T19:52:57.547091"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_002_3",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.47
          },
          {
            "target_idx": "agent_002_3",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.55
          }
        ]
      },
      {
        "idx": "agent_002_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-10T19:52:57.547119",
          "updated_at": "2024-12-26T19:52:57.547124"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_002_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "4s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.547137"
            }
          },
          {
            "idx": "tool_002_3_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-18T19:52:57.547148"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_002_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.16
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_002_1",
        "target_idx": "agent_002_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-09T19:52:57.547188"
        }
      },
      {
        "source_idx": "agent_002_2",
        "target_idx": "agent_002_2",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-22T19:52:57.547199"
        }
      },
      {
        "source_idx": "agent_002_1",
        "target_idx": "agent_002_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-16T19:52:57.547209"
        }
      }
    ],
    "response": "Final response for query 2",
    "total_tokens": 1862,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.64",
      "destination_ip": "10.0.0.75",
      "user_id": "user_3"
    }
  },
  {
    "session_id": "session_003",
    "timestamp": "2024-12-03T19:52:57.547327",
    "query": "Query example 3",
    "agents": [
      {
        "idx": "agent_003_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "2s",
          "error_log": "Sample error message",
          "created_at": "2024-12-23T19:52:57.547244",
          "updated_at": "2024-12-22T19:52:57.547250"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_003_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "9s",
              "error_log": "",
              "created_at": "2024-12-21T19:52:57.547263"
            }
          },
          {
            "idx": "tool_003_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-13T19:52:57.547274"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_003_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.79
          },
          {
            "target_idx": "agent_003_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.32
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_003_1",
        "target_idx": "agent_003_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-15T19:52:57.547298"
        }
      },
      {
        "source_idx": "agent_003_1",
        "target_idx": "agent_003_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-10T19:52:57.547310"
        }
      },
      {
        "source_idx": "agent_003_1",
        "target_idx": "agent_003_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-16T19:52:57.547321"
        }
      }
    ],
    "response": "Final response for query 3",
    "total_tokens": 2472,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.144",
      "destination_ip": "10.0.0.205",
      "user_id": "user_75"
    }
  },
  {
    "session_id": "session_004",
    "timestamp": "2024-12-11T19:52:57.547412",
    "query": "Query example 4",
    "agents": [
      {
        "idx": "agent_004_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "2s",
          "error_log": "Sample error message",
          "created_at": "2024-12-31T19:52:57.547352",
          "updated_at": "2024-12-03T19:52:57.547357"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_004_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2024-12-18T19:52:57.547369"
            }
          },
          {
            "idx": "tool_004_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-25T19:52:57.547380"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_004_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.77
          },
          {
            "target_idx": "agent_004_1",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.92
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_004_1",
        "target_idx": "agent_004_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-05T19:52:57.547406"
        }
      }
    ],
    "response": "Final response for query 4",
    "total_tokens": 1403,
    "is_active": true,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.133",
      "destination_ip": "10.0.0.4",
      "user_id": "user_6"
    }
  },
  {
    "session_id": "session_005",
    "timestamp": "2024-12-08T19:52:57.547519",
    "query": "Query example 5",
    "agents": [
      {
        "idx": "agent_005_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-29T19:52:57.547434",
          "updated_at": "2024-12-23T19:52:57.547439"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_005_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-13T19:52:57.547454"
            }
          },
          {
            "idx": "tool_005_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-22T19:52:57.547465"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_005_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.89
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_005_1",
        "target_idx": "agent_005_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-24T19:52:57.547491"
        }
      },
      {
        "source_idx": "agent_005_1",
        "target_idx": "agent_005_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-14T19:52:57.547503"
        }
      },
      {
        "source_idx": "agent_005_1",
        "target_idx": "agent_005_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-20T19:52:57.547513"
        }
      }
    ],
    "response": "Final response for query 5",
    "total_tokens": 1339,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.206",
      "destination_ip": "10.0.0.130",
      "user_id": "user_70"
    }
  },
  {
    "session_id": "session_006",
    "timestamp": "2024-12-09T19:52:57.547703",
    "query": "Query example 6",
    "agents": [
      {
        "idx": "agent_006_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "17s",
          "error_log": "Sample error message",
          "created_at": "2024-12-16T19:52:57.547547",
          "updated_at": "2024-12-24T19:52:57.547552"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_006_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.547564"
            }
          },
          {
            "idx": "tool_006_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-25T19:52:57.547576"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_006_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.13
          }
        ]
      },
      {
        "idx": "agent_006_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "2s",
          "error_log": "",
          "created_at": "2024-12-27T19:52:57.547594",
          "updated_at": "2024-12-03T19:52:57.547599"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_006_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-18T19:52:57.547612"
            }
          },
          {
            "idx": "tool_006_2_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-28T19:52:57.547624"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_006_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.64
          },
          {
            "target_idx": "agent_006_2",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.63
          }
        ]
      },
      {
        "idx": "agent_006_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "3s",
          "error_log": "Sample error message",
          "created_at": "2024-12-18T19:52:57.547646",
          "updated_at": "2024-12-21T19:52:57.547651"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_006_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "Tool error log",
              "created_at": "2024-12-19T19:52:57.547663"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_006_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.91
          },
          {
            "target_idx": "agent_006_2",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.32
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_006_3",
        "target_idx": "agent_006_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-22T19:52:57.547686"
        }
      },
      {
        "source_idx": "agent_006_3",
        "target_idx": "agent_006_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-12T19:52:57.547697"
        }
      }
    ],
    "response": "Final response for query 6",
    "total_tokens": 1356,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.210",
      "destination_ip": "10.0.0.38",
      "user_id": "user_29"
    }
  },
  {
    "session_id": "session_007",
    "timestamp": "2024-12-20T19:52:57.547880",
    "query": "Query example 7",
    "agents": [
      {
        "idx": "agent_007_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "1s",
          "error_log": "Sample error message",
          "created_at": "2024-12-11T19:52:57.547724",
          "updated_at": "2024-12-14T19:52:57.547729"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_007_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-10T19:52:57.547741"
            }
          },
          {
            "idx": "tool_007_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2025-01-02T19:52:57.547753"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_007_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.71
          }
        ]
      },
      {
        "idx": "agent_007_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "18s",
          "error_log": "Sample error message",
          "created_at": "2024-12-17T19:52:57.547771",
          "updated_at": "2024-12-24T19:52:57.547776"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_007_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-09T19:52:57.547790"
            }
          },
          {
            "idx": "tool_007_2_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "6s",
              "error_log": "Tool error log",
              "created_at": "2024-12-21T19:52:57.547808"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_007_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.89
          },
          {
            "target_idx": "agent_007_3",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.68
          }
        ]
      },
      {
        "idx": "agent_007_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "16s",
          "error_log": "",
          "created_at": "2024-12-07T19:52:57.547833",
          "updated_at": "2024-12-20T19:52:57.547838"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_007_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "8s",
              "error_log": "",
              "created_at": "2024-12-11T19:52:57.547850"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_007_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.62
          },
          {
            "target_idx": "agent_007_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.31
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_007_2",
        "target_idx": "agent_007_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-13T19:52:57.547874"
        }
      }
    ],
    "response": "Final response for query 7",
    "total_tokens": 1830,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.36",
      "destination_ip": "10.0.0.239",
      "user_id": "user_21"
    }
  },
  {
    "session_id": "session_008",
    "timestamp": "2024-12-30T19:52:57.547953",
    "query": "Query example 8",
    "agents": [
      {
        "idx": "agent_008_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "16s",
          "error_log": "Sample error message",
          "created_at": "2025-01-01T19:52:57.547901",
          "updated_at": "2024-12-07T19:52:57.547906"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_008_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-04T19:52:57.547918"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_008_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.26
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_008_1",
        "target_idx": "agent_008_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-26T19:52:57.547937"
        }
      },
      {
        "source_idx": "agent_008_1",
        "target_idx": "agent_008_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-04T19:52:57.547947"
        }
      }
    ],
    "response": "Final response for query 8",
    "total_tokens": 2414,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.247",
      "destination_ip": "10.0.0.44",
      "user_id": "user_2"
    }
  },
  {
    "session_id": "session_009",
    "timestamp": "2024-12-06T19:52:57.548159",
    "query": "Query example 9",
    "agents": [
      {
        "idx": "agent_009_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "17s",
          "error_log": "Sample error message",
          "created_at": "2024-12-06T19:52:57.547974",
          "updated_at": "2024-12-08T19:52:57.547979"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_009_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-12T19:52:57.547990"
            }
          },
          {
            "idx": "tool_009_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-16T19:52:57.548001"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_009_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.91
          },
          {
            "target_idx": "agent_009_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.59
          }
        ]
      },
      {
        "idx": "agent_009_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "14s",
          "error_log": "Sample error message",
          "created_at": "2024-12-09T19:52:57.548026",
          "updated_at": "2024-12-21T19:52:57.548032"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_009_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-11T19:52:57.548045"
            }
          },
          {
            "idx": "tool_009_2_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-03T19:52:57.548056"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_009_3",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.9
          }
        ]
      },
      {
        "idx": "agent_009_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "success",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "20s",
          "error_log": "Sample error message",
          "created_at": "2024-12-26T19:52:57.548074",
          "updated_at": "2024-12-09T19:52:57.548079"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_009_3_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "",
              "created_at": "2024-12-22T19:52:57.548099"
            }
          },
          {
            "idx": "tool_009_3_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-27T19:52:57.548110"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_009_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.56
          },
          {
            "target_idx": "agent_009_3",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.73
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_009_1",
        "target_idx": "agent_009_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.548132"
        }
      },
      {
        "source_idx": "agent_009_2",
        "target_idx": "agent_009_3",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-02T19:52:57.548142"
        }
      },
      {
        "source_idx": "agent_009_3",
        "target_idx": "agent_009_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-30T19:52:57.548153"
        }
      }
    ],
    "response": "Final response for query 9",
    "total_tokens": 2826,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.121",
      "destination_ip": "10.0.0.5",
      "user_id": "user_23"
    }
  },
  {
    "session_id": "session_010",
    "timestamp": "2024-12-24T19:52:57.548457",
    "query": "Query example 10",
    "agents": [
      {
        "idx": "agent_010_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "1s",
          "error_log": "",
          "created_at": "2024-12-13T19:52:57.548182",
          "updated_at": "2024-12-03T19:52:57.548187"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_010_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-23T19:52:57.548199"
            }
          },
          {
            "idx": "tool_010_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-08T19:52:57.548210"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_010_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.79
          }
        ]
      },
      {
        "idx": "agent_010_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "19s",
          "error_log": "Sample error message",
          "created_at": "2024-12-22T19:52:57.548228",
          "updated_at": "2024-12-21T19:52:57.548233"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_010_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-17T19:52:57.548246"
            }
          },
          {
            "idx": "tool_010_2_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "6s",
              "error_log": "Tool error log",
              "created_at": "2024-12-18T19:52:57.548355"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_010_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.69
          }
        ]
      },
      {
        "idx": "agent_010_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "Sample error message",
          "created_at": "2024-12-13T19:52:57.548380",
          "updated_at": "2024-12-24T19:52:57.548385"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_010_3_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-24T19:52:57.548397"
            }
          },
          {
            "idx": "tool_010_3_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-30T19:52:57.548408"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_010_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.73
          },
          {
            "target_idx": "agent_010_3",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.19
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_010_1",
        "target_idx": "agent_010_2",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-20T19:52:57.548433"
        }
      },
      {
        "source_idx": "agent_010_1",
        "target_idx": "agent_010_3",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-15T19:52:57.548442"
        }
      },
      {
        "source_idx": "agent_010_1",
        "target_idx": "agent_010_2",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.548451"
        }
      }
    ],
    "response": "Final response for query 10",
    "total_tokens": 1137,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.100",
      "destination_ip": "10.0.0.55",
      "user_id": "user_100"
    }
  },
  {
    "session_id": "session_011",
    "timestamp": "2024-12-03T19:52:57.548723",
    "query": "Query example 11",
    "agents": [
      {
        "idx": "agent_011_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-08T19:52:57.548479",
          "updated_at": "2024-12-31T19:52:57.548484"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_011_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-13T19:52:57.548497"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_011_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.64
          },
          {
            "target_idx": "agent_011_2",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.52
          }
        ]
      },
      {
        "idx": "agent_011_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "12s",
          "error_log": "",
          "created_at": "2024-12-03T19:52:57.548521",
          "updated_at": "2024-12-29T19:52:57.548526"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_011_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "9s",
              "error_log": "",
              "created_at": "2024-12-11T19:52:57.548539"
            }
          },
          {
            "idx": "tool_011_2_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-06T19:52:57.548551"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_011_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.98
          },
          {
            "target_idx": "agent_011_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.37
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_011_1",
        "target_idx": "agent_011_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-11T19:52:57.548695"
        }
      },
      {
        "source_idx": "agent_011_1",
        "target_idx": "agent_011_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-04T19:52:57.548707"
        }
      },
      {
        "source_idx": "agent_011_1",
        "target_idx": "agent_011_2",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-16T19:52:57.548717"
        }
      }
    ],
    "response": "Final response for query 11",
    "total_tokens": 2333,
    "is_active": false,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.36",
      "destination_ip": "10.0.0.116",
      "user_id": "user_30"
    }
  },
  {
    "session_id": "session_012",
    "timestamp": "2025-01-02T19:52:57.548813",
    "query": "Query example 12",
    "agents": [
      {
        "idx": "agent_012_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-18T19:52:57.548745",
          "updated_at": "2024-12-24T19:52:57.548750"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_012_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-21T19:52:57.548763"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_012_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.46
          },
          {
            "target_idx": "agent_012_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.68
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_012_1",
        "target_idx": "agent_012_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-15T19:52:57.548787"
        }
      },
      {
        "source_idx": "agent_012_1",
        "target_idx": "agent_012_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.548798"
        }
      },
      {
        "source_idx": "agent_012_1",
        "target_idx": "agent_012_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-14T19:52:57.548808"
        }
      }
    ],
    "response": "Final response for query 12",
    "total_tokens": 1315,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.121",
      "destination_ip": "10.0.0.181",
      "user_id": "user_78"
    }
  },
  {
    "session_id": "session_013",
    "timestamp": "2025-01-02T19:52:57.549016",
    "query": "Query example 13",
    "agents": [
      {
        "idx": "agent_013_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-31T19:52:57.548836",
          "updated_at": "2024-12-26T19:52:57.548841"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_013_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-27T19:52:57.548853"
            }
          },
          {
            "idx": "tool_013_1_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-28T19:52:57.548867"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_013_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.29
          }
        ]
      },
      {
        "idx": "agent_013_2",
        "name": "Agent 2",
        "type": "analyzer",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "12s",
          "error_log": "",
          "created_at": "2024-12-14T19:52:57.548887",
          "updated_at": "2024-12-25T19:52:57.548892"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_013_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-08T19:52:57.548904"
            }
          },
          {
            "idx": "tool_013_2_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "6s",
              "error_log": "Tool error log",
              "created_at": "2024-12-19T19:52:57.548914"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_013_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.82
          },
          {
            "target_idx": "agent_013_2",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.18
          }
        ]
      },
      {
        "idx": "agent_013_3",
        "name": "Agent 3",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "10s",
          "error_log": "",
          "created_at": "2024-12-24T19:52:57.548937",
          "updated_at": "2024-12-30T19:52:57.548942"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_013_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-13T19:52:57.548954"
            }
          },
          {
            "idx": "tool_013_3_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-09T19:52:57.548967"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_013_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.73
          },
          {
            "target_idx": "agent_013_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.3
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_013_3",
        "target_idx": "agent_013_2",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-14T19:52:57.548989"
        }
      },
      {
        "source_idx": "agent_013_3",
        "target_idx": "agent_013_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-04T19:52:57.549000"
        }
      },
      {
        "source_idx": "agent_013_2",
        "target_idx": "agent_013_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-29T19:52:57.549010"
        }
      }
    ],
    "response": "Final response for query 13",
    "total_tokens": 2692,
    "is_active": false,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.128",
      "destination_ip": "10.0.0.236",
      "user_id": "user_70"
    }
  },
  {
    "session_id": "session_014",
    "timestamp": "2024-12-21T19:52:57.549265",
    "query": "Query example 14",
    "agents": [
      {
        "idx": "agent_014_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "2s",
          "error_log": "",
          "created_at": "2024-12-10T19:52:57.549037",
          "updated_at": "2024-12-18T19:52:57.549042"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_014_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2024-12-30T19:52:57.549054"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_014_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.16
          },
          {
            "target_idx": "agent_014_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.78
          }
        ]
      },
      {
        "idx": "agent_014_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "2s",
          "error_log": "",
          "created_at": "2024-12-14T19:52:57.549078",
          "updated_at": "2024-12-18T19:52:57.549083"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_014_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-16T19:52:57.549095"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_014_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.31
          },
          {
            "target_idx": "agent_014_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.62
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_014_1",
        "target_idx": "agent_014_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-04T19:52:57.549241"
        }
      }
    ],
    "response": "Final response for query 14",
    "total_tokens": 2743,
    "is_active": false,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.231",
      "destination_ip": "10.0.0.98",
      "user_id": "user_20"
    }
  },
  {
    "session_id": "session_015",
    "timestamp": "2024-12-11T19:52:57.549417",
    "query": "Query example 15",
    "agents": [
      {
        "idx": "agent_015_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "20s",
          "error_log": "Sample error message",
          "created_at": "2024-12-27T19:52:57.549309",
          "updated_at": "2025-01-01T19:52:57.549314"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_015_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2025-01-02T19:52:57.549325"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_015_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.38
          }
        ]
      },
      {
        "idx": "agent_015_2",
        "name": "Agent 2",
        "type": "analyzer",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "15s",
          "error_log": "",
          "created_at": "2024-12-29T19:52:57.549361",
          "updated_at": "2024-12-28T19:52:57.549364"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_015_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-17T19:52:57.549372"
            }
          },
          {
            "idx": "tool_015_2_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-31T19:52:57.549379"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_015_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.84
          },
          {
            "target_idx": "agent_015_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.23
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_015_1",
        "target_idx": "agent_015_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.549395"
        }
      },
      {
        "source_idx": "agent_015_2",
        "target_idx": "agent_015_2",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-21T19:52:57.549402"
        }
      }
    ],
    "response": "Final response for query 15",
    "total_tokens": 1224,
    "is_active": false,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.231",
      "destination_ip": "10.0.0.151",
      "user_id": "user_69"
    }
  },
  {
    "session_id": "session_016",
    "timestamp": "2024-12-28T19:52:57.549517",
    "query": "Query example 16",
    "agents": [
      {
        "idx": "agent_016_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "11s",
          "error_log": "Sample error message",
          "created_at": "2024-12-31T19:52:57.549443",
          "updated_at": "2024-12-16T19:52:57.549447"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_016_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-24T19:52:57.549459"
            }
          },
          {
            "idx": "tool_016_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-03T19:52:57.549482"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_016_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.56
          },
          {
            "target_idx": "agent_016_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.44
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_016_1",
        "target_idx": "agent_016_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-21T19:52:57.549507"
        }
      },
      {
        "source_idx": "agent_016_1",
        "target_idx": "agent_016_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-25T19:52:57.549514"
        }
      }
    ],
    "response": "Final response for query 16",
    "total_tokens": 2649,
    "is_active": true,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.82",
      "destination_ip": "10.0.0.41",
      "user_id": "user_72"
    }
  },
  {
    "session_id": "session_017",
    "timestamp": "2024-12-27T19:52:57.549623",
    "query": "Query example 17",
    "agents": [
      {
        "idx": "agent_017_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "11s",
          "error_log": "Sample error message",
          "created_at": "2024-12-29T19:52:57.549531",
          "updated_at": "2024-12-26T19:52:57.549534"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_017_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-14T19:52:57.549541"
            }
          },
          {
            "idx": "tool_017_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "6s",
              "error_log": "",
              "created_at": "2024-12-14T19:52:57.549548"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_017_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.36
          },
          {
            "target_idx": "agent_017_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.18
          }
        ]
      },
      {
        "idx": "agent_017_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "6s",
          "error_log": "Sample error message",
          "created_at": "2024-12-11T19:52:57.549572",
          "updated_at": "2024-12-03T19:52:57.549577"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_017_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-25T19:52:57.549589"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_017_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.42
          },
          {
            "target_idx": "agent_017_2",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.27
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_017_2",
        "target_idx": "agent_017_2",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-31T19:52:57.549606"
        }
      },
      {
        "source_idx": "agent_017_2",
        "target_idx": "agent_017_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-15T19:52:57.549613"
        }
      },
      {
        "source_idx": "agent_017_2",
        "target_idx": "agent_017_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-03T19:52:57.549619"
        }
      }
    ],
    "response": "Final response for query 17",
    "total_tokens": 1618,
    "is_active": true,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.75",
      "destination_ip": "10.0.0.236",
      "user_id": "user_34"
    }
  },
  {
    "session_id": "session_018",
    "timestamp": "2024-12-21T19:52:57.549674",
    "query": "Query example 18",
    "agents": [
      {
        "idx": "agent_018_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-22T19:52:57.549637",
          "updated_at": "2024-12-05T19:52:57.549640"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_018_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-09T19:52:57.549647"
            }
          },
          {
            "idx": "tool_018_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-04T19:52:57.549654"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_018_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.98
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_018_1",
        "target_idx": "agent_018_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-09T19:52:57.549667"
        }
      }
    ],
    "response": "Final response for query 18",
    "total_tokens": 2835,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.99",
      "destination_ip": "10.0.0.48",
      "user_id": "user_44"
    }
  },
  {
    "session_id": "session_019",
    "timestamp": "2024-12-17T19:52:57.549813",
    "query": "Query example 19",
    "agents": [
      {
        "idx": "agent_019_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "7s",
          "error_log": "",
          "created_at": "2024-12-17T19:52:57.549692",
          "updated_at": "2024-12-30T19:52:57.549695"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_019_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "9s",
              "error_log": "",
              "created_at": "2024-12-06T19:52:57.549702"
            }
          },
          {
            "idx": "tool_019_1_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-09T19:52:57.549710"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_019_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.8
          },
          {
            "target_idx": "agent_019_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.7
          }
        ]
      },
      {
        "idx": "agent_019_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "9s",
          "error_log": "",
          "created_at": "2024-12-29T19:52:57.549737",
          "updated_at": "2024-12-27T19:52:57.549741"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_019_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-29T19:52:57.549752"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_019_3",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.11
          }
        ]
      },
      {
        "idx": "agent_019_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "10s",
          "error_log": "Sample error message",
          "created_at": "2025-01-02T19:52:57.549769",
          "updated_at": "2024-12-07T19:52:57.549773"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_019_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-20T19:52:57.549780"
            }
          },
          {
            "idx": "tool_019_3_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-17T19:52:57.549788"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_019_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.75
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_019_1",
        "target_idx": "agent_019_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-25T19:52:57.549807"
        }
      }
    ],
    "response": "Final response for query 19",
    "total_tokens": 1262,
    "is_active": true,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.105",
      "destination_ip": "10.0.0.209",
      "user_id": "user_3"
    }
  },
  {
    "session_id": "session_020",
    "timestamp": "2024-12-25T19:52:57.549973",
    "query": "Query example 20",
    "agents": [
      {
        "idx": "agent_020_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "9s",
          "error_log": "Sample error message",
          "created_at": "2024-12-24T19:52:57.549830",
          "updated_at": "2024-12-27T19:52:57.549833"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_020_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "6s",
              "error_log": "Tool error log",
              "created_at": "2024-12-23T19:52:57.549851"
            }
          },
          {
            "idx": "tool_020_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-07T19:52:57.549862"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_020_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.91
          }
        ]
      },
      {
        "idx": "agent_020_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "16s",
          "error_log": "Sample error message",
          "created_at": "2024-12-19T19:52:57.549907",
          "updated_at": "2024-12-22T19:52:57.549911"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_020_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "6s",
              "error_log": "",
              "created_at": "2024-12-21T19:52:57.549919"
            }
          },
          {
            "idx": "tool_020_2_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-30T19:52:57.549926"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_020_3",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.74
          },
          {
            "target_idx": "agent_020_3",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.21
          }
        ]
      },
      {
        "idx": "agent_020_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "16s",
          "error_log": "Sample error message",
          "created_at": "2024-12-18T19:52:57.549940",
          "updated_at": "2024-12-22T19:52:57.549943"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_020_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "8s",
              "error_log": "",
              "created_at": "2024-12-23T19:52:57.549950"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_020_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.92
          },
          {
            "target_idx": "agent_020_2",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.67
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_020_2",
        "target_idx": "agent_020_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.549966"
        }
      }
    ],
    "response": "Final response for query 20",
    "total_tokens": 1020,
    "is_active": true,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.195",
      "destination_ip": "10.0.0.122",
      "user_id": "user_45"
    }
  },
  {
    "session_id": "session_021",
    "timestamp": "2024-12-12T19:52:57.550108",
    "query": "Query example 21",
    "agents": [
      {
        "idx": "agent_021_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "19s",
          "error_log": "",
          "created_at": "2024-12-14T19:52:57.549994",
          "updated_at": "2024-12-20T19:52:57.549999"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_021_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-26T19:52:57.550009"
            }
          },
          {
            "idx": "tool_021_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-20T19:52:57.550015"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_021_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.25
          }
        ]
      },
      {
        "idx": "agent_021_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "5s",
          "error_log": "",
          "created_at": "2024-12-04T19:52:57.550028",
          "updated_at": "2025-01-01T19:52:57.550031"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_021_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-05T19:52:57.550038"
            }
          },
          {
            "idx": "tool_021_2_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-15T19:52:57.550044"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_021_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.15
          },
          {
            "target_idx": "agent_021_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.23
          }
        ]
      },
      {
        "idx": "agent_021_3",
        "name": "Agent 3",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "11s",
          "error_log": "Sample error message",
          "created_at": "2024-12-23T19:52:57.550058",
          "updated_at": "2024-12-11T19:52:57.550062"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_021_3_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "8s",
              "error_log": "",
              "created_at": "2024-12-13T19:52:57.550068"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_021_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.33
          },
          {
            "target_idx": "agent_021_2",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.29
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_021_2",
        "target_idx": "agent_021_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-30T19:52:57.550082"
        }
      },
      {
        "source_idx": "agent_021_2",
        "target_idx": "agent_021_2",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-26T19:52:57.550087"
        }
      },
      {
        "source_idx": "agent_021_2",
        "target_idx": "agent_021_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.550104"
        }
      }
    ],
    "response": "Final response for query 21",
    "total_tokens": 1144,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.141",
      "destination_ip": "10.0.0.248",
      "user_id": "user_24"
    }
  },
  {
    "session_id": "session_022",
    "timestamp": "2024-12-26T19:52:57.550223",
    "query": "Query example 22",
    "agents": [
      {
        "idx": "agent_022_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "15s",
          "error_log": "Sample error message",
          "created_at": "2024-12-10T19:52:57.550123",
          "updated_at": "2024-12-12T19:52:57.550126"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_022_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-14T19:52:57.550137"
            }
          },
          {
            "idx": "tool_022_1_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-24T19:52:57.550147"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_022_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.87
          }
        ]
      },
      {
        "idx": "agent_022_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "5s",
          "error_log": "",
          "created_at": "2024-12-16T19:52:57.550166",
          "updated_at": "2024-12-03T19:52:57.550169"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_022_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-31T19:52:57.550176"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_022_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.44
          },
          {
            "target_idx": "agent_022_2",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.35
          }
        ]
      },
      {
        "idx": "agent_022_3",
        "name": "Agent 3",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "12s",
          "error_log": "",
          "created_at": "2024-12-15T19:52:57.550190",
          "updated_at": "2024-12-26T19:52:57.550193"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_022_3_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-17T19:52:57.550200"
            }
          },
          {
            "idx": "tool_022_3_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.550206"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_022_3",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.73
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_022_3",
        "target_idx": "agent_022_2",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-06T19:52:57.550219"
        }
      }
    ],
    "response": "Final response for query 22",
    "total_tokens": 1409,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.138",
      "destination_ip": "10.0.0.248",
      "user_id": "user_10"
    }
  },
  {
    "session_id": "session_023",
    "timestamp": "2024-12-09T19:52:57.550346",
    "query": "Query example 23",
    "agents": [
      {
        "idx": "agent_023_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "2s",
          "error_log": "",
          "created_at": "2024-12-21T19:52:57.550235",
          "updated_at": "2024-12-21T19:52:57.550238"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_023_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2024-12-08T19:52:57.550247"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_023_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.47
          },
          {
            "target_idx": "agent_023_2",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.83
          }
        ]
      },
      {
        "idx": "agent_023_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "20s",
          "error_log": "Sample error message",
          "created_at": "2025-01-01T19:52:57.550266",
          "updated_at": "2024-12-09T19:52:57.550272"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_023_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-22T19:52:57.550281"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_023_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.17
          }
        ]
      },
      {
        "idx": "agent_023_3",
        "name": "Agent 3",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "13s",
          "error_log": "Sample error message",
          "created_at": "2024-12-13T19:52:57.550292",
          "updated_at": "2024-12-08T19:52:57.550295"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_023_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-26T19:52:57.550305"
            }
          },
          {
            "idx": "tool_023_3_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-08T19:52:57.550315"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_023_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.69
          },
          {
            "target_idx": "agent_023_3",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.15
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_023_2",
        "target_idx": "agent_023_3",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-02T19:52:57.550338"
        }
      }
    ],
    "response": "Final response for query 23",
    "total_tokens": 1471,
    "is_active": true,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.105",
      "destination_ip": "10.0.0.69",
      "user_id": "user_55"
    }
  },
  {
    "session_id": "session_024",
    "timestamp": "2024-12-28T19:52:57.550452",
    "query": "Query example 24",
    "agents": [
      {
        "idx": "agent_024_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "16s",
          "error_log": "",
          "created_at": "2024-12-18T19:52:57.550361",
          "updated_at": "2024-12-11T19:52:57.550364"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_024_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-13T19:52:57.550371"
            }
          },
          {
            "idx": "tool_024_1_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-08T19:52:57.550378"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_024_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.28
          }
        ]
      },
      {
        "idx": "agent_024_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "6s",
          "error_log": "",
          "created_at": "2024-12-18T19:52:57.550390",
          "updated_at": "2024-12-25T19:52:57.550393"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_024_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "Tool error log",
              "created_at": "2024-12-21T19:52:57.550400"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_024_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.49
          }
        ]
      },
      {
        "idx": "agent_024_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "10s",
          "error_log": "Sample error message",
          "created_at": "2024-12-04T19:52:57.550411",
          "updated_at": "2024-12-17T19:52:57.550414"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_024_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-06T19:52:57.550421"
            }
          },
          {
            "idx": "tool_024_3_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "Tool error log",
              "created_at": "2024-12-03T19:52:57.550427"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_024_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.88
          },
          {
            "target_idx": "agent_024_3",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.59
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_024_2",
        "target_idx": "agent_024_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-15T19:52:57.550442"
        }
      },
      {
        "source_idx": "agent_024_1",
        "target_idx": "agent_024_3",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-25T19:52:57.550448"
        }
      }
    ],
    "response": "Final response for query 24",
    "total_tokens": 2993,
    "is_active": false,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.33",
      "destination_ip": "10.0.0.118",
      "user_id": "user_25"
    }
  },
  {
    "session_id": "session_025",
    "timestamp": "2024-12-14T19:52:57.550574",
    "query": "Query example 25",
    "agents": [
      {
        "idx": "agent_025_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-17T19:52:57.550464",
          "updated_at": "2024-12-28T19:52:57.550467"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_025_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-10T19:52:57.550474"
            }
          },
          {
            "idx": "tool_025_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-21T19:52:57.550480"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_025_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.6
          },
          {
            "target_idx": "agent_025_3",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.78
          }
        ]
      },
      {
        "idx": "agent_025_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "9s",
          "error_log": "Sample error message",
          "created_at": "2025-01-02T19:52:57.550493",
          "updated_at": "2025-01-02T19:52:57.550496"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_025_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2024-12-16T19:52:57.550503"
            }
          },
          {
            "idx": "tool_025_2_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-21T19:52:57.550514"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_025_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.17
          },
          {
            "target_idx": "agent_025_2",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.54
          }
        ]
      },
      {
        "idx": "agent_025_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "12s",
          "error_log": "Sample error message",
          "created_at": "2024-12-04T19:52:57.550536",
          "updated_at": "2024-12-08T19:52:57.550541"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_025_3_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-12T19:52:57.550552"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_025_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.56
          },
          {
            "target_idx": "agent_025_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.43
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_025_2",
        "target_idx": "agent_025_2",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-17T19:52:57.550565"
        }
      },
      {
        "source_idx": "agent_025_3",
        "target_idx": "agent_025_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-30T19:52:57.550571"
        }
      }
    ],
    "response": "Final response for query 25",
    "total_tokens": 1793,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.143",
      "destination_ip": "10.0.0.131",
      "user_id": "user_49"
    }
  },
  {
    "session_id": "session_026",
    "timestamp": "2024-12-17T19:52:57.550660",
    "query": "Query example 26",
    "agents": [
      {
        "idx": "agent_026_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "",
          "created_at": "2025-01-02T19:52:57.550587",
          "updated_at": "2024-12-12T19:52:57.550590"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_026_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-08T19:52:57.550597"
            }
          },
          {
            "idx": "tool_026_1_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-17T19:52:57.550604"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_026_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.3
          }
        ]
      },
      {
        "idx": "agent_026_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "4s",
          "error_log": "Sample error message",
          "created_at": "2024-12-08T19:52:57.550615",
          "updated_at": "2024-12-29T19:52:57.550618"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_026_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2024-12-04T19:52:57.550629"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_026_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.73
          },
          {
            "target_idx": "agent_026_2",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.75
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_026_1",
        "target_idx": "agent_026_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-14T19:52:57.550649"
        }
      },
      {
        "source_idx": "agent_026_1",
        "target_idx": "agent_026_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-22T19:52:57.550657"
        }
      }
    ],
    "response": "Final response for query 26",
    "total_tokens": 1853,
    "is_active": false,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.39",
      "destination_ip": "10.0.0.88",
      "user_id": "user_93"
    }
  },
  {
    "session_id": "session_027",
    "timestamp": "2024-12-08T19:52:57.550734",
    "query": "Query example 27",
    "agents": [
      {
        "idx": "agent_027_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "8s",
          "error_log": "Sample error message",
          "created_at": "2024-12-10T19:52:57.550672",
          "updated_at": "2024-12-28T19:52:57.550675"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_027_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-05T19:52:57.550682"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_027_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.16
          }
        ]
      },
      {
        "idx": "agent_027_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "12s",
          "error_log": "",
          "created_at": "2024-12-27T19:52:57.550694",
          "updated_at": "2024-12-04T19:52:57.550697"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_027_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-03T19:52:57.550707"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_027_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.59
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_027_1",
        "target_idx": "agent_027_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-23T19:52:57.550723"
        }
      },
      {
        "source_idx": "agent_027_1",
        "target_idx": "agent_027_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-30T19:52:57.550731"
        }
      }
    ],
    "response": "Final response for query 27",
    "total_tokens": 1460,
    "is_active": true,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.119",
      "destination_ip": "10.0.0.123",
      "user_id": "user_64"
    }
  },
  {
    "session_id": "session_028",
    "timestamp": "2024-12-09T19:52:57.550836",
    "query": "Query example 28",
    "agents": [
      {
        "idx": "agent_028_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-11T19:52:57.550748",
          "updated_at": "2024-12-08T19:52:57.550751"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_028_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "8s",
              "error_log": "",
              "created_at": "2024-12-20T19:52:57.550758"
            }
          },
          {
            "idx": "tool_028_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-27T19:52:57.550764"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_028_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.79
          },
          {
            "target_idx": "agent_028_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.31
          }
        ]
      },
      {
        "idx": "agent_028_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "17s",
          "error_log": "Sample error message",
          "created_at": "2024-12-25T19:52:57.550777",
          "updated_at": "2024-12-09T19:52:57.550780"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_028_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.550788"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_028_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.77
          }
        ]
      },
      {
        "idx": "agent_028_3",
        "name": "Agent 3",
        "type": "validator",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "15s",
          "error_log": "",
          "created_at": "2024-12-10T19:52:57.550800",
          "updated_at": "2024-12-28T19:52:57.550803"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_028_3_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "6s",
              "error_log": "Tool error log",
              "created_at": "2024-12-11T19:52:57.550810"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_028_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.46
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_028_2",
        "target_idx": "agent_028_2",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-16T19:52:57.550820"
        }
      },
      {
        "source_idx": "agent_028_1",
        "target_idx": "agent_028_3",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-10T19:52:57.550827"
        }
      },
      {
        "source_idx": "agent_028_2",
        "target_idx": "agent_028_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-04T19:52:57.550832"
        }
      }
    ],
    "response": "Final response for query 28",
    "total_tokens": 2351,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.198",
      "destination_ip": "10.0.0.43",
      "user_id": "user_77"
    }
  },
  {
    "session_id": "session_029",
    "timestamp": "2024-12-09T19:52:57.550969",
    "query": "Query example 29",
    "agents": [
      {
        "idx": "agent_029_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "5s",
          "error_log": "",
          "created_at": "2024-12-13T19:52:57.550855",
          "updated_at": "2024-12-06T19:52:57.550859"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_029_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-21T19:52:57.550870"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_029_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.63
          }
        ]
      },
      {
        "idx": "agent_029_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "3s",
          "error_log": "",
          "created_at": "2024-12-06T19:52:57.550888",
          "updated_at": "2024-12-21T19:52:57.550893"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_029_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-15T19:52:57.550904"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_029_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.99
          }
        ]
      },
      {
        "idx": "agent_029_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "13s",
          "error_log": "Sample error message",
          "created_at": "2024-12-28T19:52:57.550917",
          "updated_at": "2024-12-23T19:52:57.550920"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_029_3_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-18T19:52:57.550931"
            }
          },
          {
            "idx": "tool_029_3_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-15T19:52:57.550942"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_029_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.23
          },
          {
            "target_idx": "agent_029_1",
            "relation": "triggers",
            "description": "Relation description 2",
            "weight": 0.37
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_029_3",
        "target_idx": "agent_029_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-29T19:52:57.550965"
        }
      }
    ],
    "response": "Final response for query 29",
    "total_tokens": 2469,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.238",
      "destination_ip": "10.0.0.55",
      "user_id": "user_2"
    }
  },
  {
    "session_id": "session_030",
    "timestamp": "2024-12-27T19:52:57.551012",
    "query": "Query example 30",
    "agents": [
      {
        "idx": "agent_030_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "15s",
          "error_log": "Sample error message",
          "created_at": "2024-12-17T19:52:57.550982",
          "updated_at": "2024-12-20T19:52:57.550985"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_030_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-09T19:52:57.550993"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_030_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.75
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_030_1",
        "target_idx": "agent_030_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-20T19:52:57.551003"
        }
      },
      {
        "source_idx": "agent_030_1",
        "target_idx": "agent_030_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-17T19:52:57.551009"
        }
      }
    ],
    "response": "Final response for query 30",
    "total_tokens": 1549,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.29",
      "destination_ip": "10.0.0.48",
      "user_id": "user_70"
    }
  },
  {
    "session_id": "session_031",
    "timestamp": "2025-01-02T19:52:57.551119",
    "query": "Query example 31",
    "agents": [
      {
        "idx": "agent_031_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "1s",
          "error_log": "Sample error message",
          "created_at": "2024-12-18T19:52:57.551025",
          "updated_at": "2024-12-31T19:52:57.551028"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_031_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2024-12-20T19:52:57.551035"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_031_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.46
          }
        ]
      },
      {
        "idx": "agent_031_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-21T19:52:57.551048",
          "updated_at": "2024-12-09T19:52:57.551053"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_031_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.551064"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_031_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.46
          },
          {
            "target_idx": "agent_031_1",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.3
          }
        ]
      },
      {
        "idx": "agent_031_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-07T19:52:57.551084",
          "updated_at": "2024-12-25T19:52:57.551087"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_031_3_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-04T19:52:57.551094"
            }
          },
          {
            "idx": "tool_031_3_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-28T19:52:57.551102"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_031_3",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.15
          },
          {
            "target_idx": "agent_031_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.95
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_031_1",
        "target_idx": "agent_031_3",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-17T19:52:57.551116"
        }
      }
    ],
    "response": "Final response for query 31",
    "total_tokens": 2983,
    "is_active": false,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.146",
      "destination_ip": "10.0.0.99",
      "user_id": "user_37"
    }
  },
  {
    "session_id": "session_032",
    "timestamp": "2024-12-30T19:52:57.551220",
    "query": "Query example 32",
    "agents": [
      {
        "idx": "agent_032_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "",
          "created_at": "2025-01-02T19:52:57.551132",
          "updated_at": "2024-12-23T19:52:57.551135"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_032_1_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-27T19:52:57.551141"
            }
          },
          {
            "idx": "tool_032_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-14T19:52:57.551148"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_032_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.92
          },
          {
            "target_idx": "agent_032_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.63
          }
        ]
      },
      {
        "idx": "agent_032_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "1s",
          "error_log": "Sample error message",
          "created_at": "2024-12-04T19:52:57.551161",
          "updated_at": "2024-12-06T19:52:57.551164"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_032_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "",
              "created_at": "2025-01-01T19:52:57.551171"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_032_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.83
          }
        ]
      },
      {
        "idx": "agent_032_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "15s",
          "error_log": "",
          "created_at": "2024-12-21T19:52:57.551182",
          "updated_at": "2024-12-04T19:52:57.551185"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_032_3_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-17T19:52:57.551192"
            }
          },
          {
            "idx": "tool_032_3_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-04T19:52:57.551198"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_032_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.21
          },
          {
            "target_idx": "agent_032_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.39
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_032_2",
        "target_idx": "agent_032_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.551215"
        }
      }
    ],
    "response": "Final response for query 32",
    "total_tokens": 2235,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.114",
      "destination_ip": "10.0.0.61",
      "user_id": "user_58"
    }
  },
  {
    "session_id": "session_033",
    "timestamp": "2024-12-04T19:52:57.551321",
    "query": "Query example 33",
    "agents": [
      {
        "idx": "agent_033_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2025-01-01T19:52:57.551241",
          "updated_at": "2024-12-26T19:52:57.551245"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_033_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-09T19:52:57.551253"
            }
          },
          {
            "idx": "tool_033_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-18T19:52:57.551260"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_033_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.71
          },
          {
            "target_idx": "agent_033_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.33
          }
        ]
      },
      {
        "idx": "agent_033_2",
        "name": "Agent 2",
        "type": "analyzer",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-08T19:52:57.551274",
          "updated_at": "2024-12-19T19:52:57.551277"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_033_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-03T19:52:57.551284"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_033_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.71
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_033_2",
        "target_idx": "agent_033_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-13T19:52:57.551295"
        }
      },
      {
        "source_idx": "agent_033_1",
        "target_idx": "agent_033_2",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-20T19:52:57.551318"
        }
      }
    ],
    "response": "Final response for query 33",
    "total_tokens": 2144,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.217",
      "destination_ip": "10.0.0.125",
      "user_id": "user_100"
    }
  },
  {
    "session_id": "session_034",
    "timestamp": "2024-12-07T19:52:57.551429",
    "query": "Query example 34",
    "agents": [
      {
        "idx": "agent_034_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "4s",
          "error_log": "Sample error message",
          "created_at": "2024-12-19T19:52:57.551334",
          "updated_at": "2024-12-21T19:52:57.551337"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_034_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-13T19:52:57.551344"
            }
          },
          {
            "idx": "tool_034_1_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "6s",
              "error_log": "",
              "created_at": "2024-12-16T19:52:57.551350"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_034_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.44
          },
          {
            "target_idx": "agent_034_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.74
          }
        ]
      },
      {
        "idx": "agent_034_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-17T19:52:57.551369",
          "updated_at": "2024-12-29T19:52:57.551374"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_034_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-14T19:52:57.551385"
            }
          },
          {
            "idx": "tool_034_2_2",
            "name": "Tool 2",
            "type": "logger",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "4s",
              "error_log": "Tool error log",
              "created_at": "2024-12-20T19:52:57.551392"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_034_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.55
          },
          {
            "target_idx": "agent_034_1",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.62
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_034_2",
        "target_idx": "agent_034_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-30T19:52:57.551413"
        }
      },
      {
        "source_idx": "agent_034_1",
        "target_idx": "agent_034_2",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-17T19:52:57.551420"
        }
      },
      {
        "source_idx": "agent_034_2",
        "target_idx": "agent_034_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-19T19:52:57.551426"
        }
      }
    ],
    "response": "Final response for query 34",
    "total_tokens": 1990,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.63",
      "destination_ip": "10.0.0.82",
      "user_id": "user_33"
    }
  },
  {
    "session_id": "session_035",
    "timestamp": "2024-12-14T19:52:57.551600",
    "query": "Query example 35",
    "agents": [
      {
        "idx": "agent_035_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "20s",
          "error_log": "",
          "created_at": "2024-12-24T19:52:57.551442",
          "updated_at": "2024-12-20T19:52:57.551445"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_035_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-06T19:52:57.551452"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_035_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.74
          },
          {
            "target_idx": "agent_035_2",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.21
          }
        ]
      },
      {
        "idx": "agent_035_2",
        "name": "Agent 2",
        "type": "exploit",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "17s",
          "error_log": "",
          "created_at": "2024-12-22T19:52:57.551550",
          "updated_at": "2024-12-23T19:52:57.551553"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_035_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-29T19:52:57.551560"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_035_3",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.83
          }
        ]
      },
      {
        "idx": "agent_035_3",
        "name": "Agent 3",
        "type": "validator",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "5s",
          "error_log": "",
          "created_at": "2024-12-27T19:52:57.551572",
          "updated_at": "2024-12-14T19:52:57.551575"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_035_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-23T19:52:57.551582"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_035_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.13
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_035_1",
        "target_idx": "agent_035_2",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-28T19:52:57.551594"
        }
      }
    ],
    "response": "Final response for query 35",
    "total_tokens": 2226,
    "is_active": true,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.80",
      "destination_ip": "10.0.0.119",
      "user_id": "user_58"
    }
  },
  {
    "session_id": "session_036",
    "timestamp": "2024-12-17T19:52:57.551712",
    "query": "Query example 36",
    "agents": [
      {
        "idx": "agent_036_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "14s",
          "error_log": "",
          "created_at": "2024-12-17T19:52:57.551621",
          "updated_at": "2024-12-08T19:52:57.551626"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_036_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "4s",
              "error_log": "Tool error log",
              "created_at": "2024-12-06T19:52:57.551637"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_036_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.58
          }
        ]
      },
      {
        "idx": "agent_036_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "18s",
          "error_log": "Sample error message",
          "created_at": "2024-12-19T19:52:57.551648",
          "updated_at": "2024-12-04T19:52:57.551651"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_036_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-16T19:52:57.551659"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_036_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.68
          }
        ]
      },
      {
        "idx": "agent_036_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "11s",
          "error_log": "Sample error message",
          "created_at": "2024-12-27T19:52:57.551671",
          "updated_at": "2024-12-11T19:52:57.551674"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_036_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-17T19:52:57.551682"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_036_2",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.99
          },
          {
            "target_idx": "agent_036_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.79
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_036_3",
        "target_idx": "agent_036_3",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-18T19:52:57.551697"
        }
      },
      {
        "source_idx": "agent_036_2",
        "target_idx": "agent_036_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-20T19:52:57.551706"
        }
      }
    ],
    "response": "Final response for query 36",
    "total_tokens": 1689,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.171",
      "destination_ip": "10.0.0.53",
      "user_id": "user_54"
    }
  },
  {
    "session_id": "session_037",
    "timestamp": "2024-12-06T19:52:57.551821",
    "query": "Query example 37",
    "agents": [
      {
        "idx": "agent_037_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "20s",
          "error_log": "Sample error message",
          "created_at": "2025-01-02T19:52:57.551734",
          "updated_at": "2024-12-19T19:52:57.551737"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_037_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "4s",
              "error_log": "",
              "created_at": "2024-12-20T19:52:57.551744"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_037_3",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.73
          },
          {
            "target_idx": "agent_037_3",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.33
          }
        ]
      },
      {
        "idx": "agent_037_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "8s",
          "error_log": "",
          "created_at": "2024-12-23T19:52:57.551758",
          "updated_at": "2024-12-03T19:52:57.551761"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_037_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-09T19:52:57.551770"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_037_3",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.92
          }
        ]
      },
      {
        "idx": "agent_037_3",
        "name": "Agent 3",
        "type": "scanner",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "12s",
          "error_log": "Sample error message",
          "created_at": "2024-12-05T19:52:57.551783",
          "updated_at": "2025-01-01T19:52:57.551788"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_037_3_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-30T19:52:57.551799"
            }
          },
          {
            "idx": "tool_037_3_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "Tool error log",
              "created_at": "2024-12-17T19:52:57.551807"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_037_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.88
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_037_1",
        "target_idx": "agent_037_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-19T19:52:57.551817"
        }
      }
    ],
    "response": "Final response for query 37",
    "total_tokens": 2245,
    "is_active": false,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.74",
      "destination_ip": "10.0.0.9",
      "user_id": "user_19"
    }
  },
  {
    "session_id": "session_038",
    "timestamp": "2024-12-14T19:52:57.551917",
    "query": "Query example 38",
    "agents": [
      {
        "idx": "agent_038_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [],
        "metadata": {
          "execution_time": "1s",
          "error_log": "Sample error message",
          "created_at": "2024-12-07T19:52:57.551840",
          "updated_at": "2024-12-28T19:52:57.551843"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_038_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-21T19:52:57.551857"
            }
          },
          {
            "idx": "tool_038_1_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-16T19:52:57.551868"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_038_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.61
          }
        ]
      },
      {
        "idx": "agent_038_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "18s",
          "error_log": "",
          "created_at": "2024-12-06T19:52:57.551881",
          "updated_at": "2024-12-17T19:52:57.551884"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_038_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-04T19:52:57.551891"
            }
          },
          {
            "idx": "tool_038_2_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "6s",
              "error_log": "",
              "created_at": "2024-12-24T19:52:57.551897"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_038_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.57
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_038_1",
        "target_idx": "agent_038_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-18T19:52:57.551911"
        }
      }
    ],
    "response": "Final response for query 38",
    "total_tokens": 1815,
    "is_active": false,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.44",
      "destination_ip": "10.0.0.234",
      "user_id": "user_19"
    }
  },
  {
    "session_id": "session_039",
    "timestamp": "2025-01-01T19:52:57.551992",
    "query": "Query example 39",
    "agents": [
      {
        "idx": "agent_039_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "16s",
          "error_log": "",
          "created_at": "2024-12-16T19:52:57.551939",
          "updated_at": "2024-12-30T19:52:57.551943"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_039_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-05T19:52:57.551955"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_039_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.51
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_039_1",
        "target_idx": "agent_039_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-08T19:52:57.551978"
        }
      },
      {
        "source_idx": "agent_039_1",
        "target_idx": "agent_039_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-30T19:52:57.551989"
        }
      }
    ],
    "response": "Final response for query 39",
    "total_tokens": 1175,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.240",
      "destination_ip": "10.0.0.31",
      "user_id": "user_63"
    }
  },
  {
    "session_id": "session_040",
    "timestamp": "2024-12-20T19:52:57.552102",
    "query": "Query example 40",
    "agents": [
      {
        "idx": "agent_040_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "5s",
          "error_log": "",
          "created_at": "2024-12-14T19:52:57.552007",
          "updated_at": "2024-12-31T19:52:57.552012"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_040_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-23T19:52:57.552025"
            }
          },
          {
            "idx": "tool_040_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-11T19:52:57.552036"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_040_2",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.21
          }
        ]
      },
      {
        "idx": "agent_040_2",
        "name": "Agent 2",
        "type": "analyzer",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "16s",
          "error_log": "",
          "created_at": "2024-12-25T19:52:57.552051",
          "updated_at": "2024-12-07T19:52:57.552053"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_040_2_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-04T19:52:57.552060"
            }
          },
          {
            "idx": "tool_040_2_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-14T19:52:57.552066"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_040_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.94
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_040_2",
        "target_idx": "agent_040_2",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-27T19:52:57.552096"
        }
      }
    ],
    "response": "Final response for query 40",
    "total_tokens": 1444,
    "is_active": true,
    "metadata": {
      "priority": "high",
      "source_ip": "192.168.1.194",
      "destination_ip": "10.0.0.108",
      "user_id": "user_47"
    }
  },
  {
    "session_id": "session_041",
    "timestamp": "2024-12-14T19:52:57.552167",
    "query": "Query example 41",
    "agents": [
      {
        "idx": "agent_041_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "16s",
          "error_log": "",
          "created_at": "2024-12-12T19:52:57.552118",
          "updated_at": "2024-12-25T19:52:57.552122"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_041_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-07T19:52:57.552132"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_041_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.46
          },
          {
            "target_idx": "agent_041_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.43
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_041_1",
        "target_idx": "agent_041_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-23T19:52:57.552162"
        }
      }
    ],
    "response": "Final response for query 41",
    "total_tokens": 2742,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.87",
      "destination_ip": "10.0.0.232",
      "user_id": "user_48"
    }
  },
  {
    "session_id": "session_042",
    "timestamp": "2024-12-15T19:52:57.552222",
    "query": "Query example 42",
    "agents": [
      {
        "idx": "agent_042_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "5s",
          "error_log": "Sample error message",
          "created_at": "2024-12-26T19:52:57.552180",
          "updated_at": "2024-12-24T19:52:57.552183"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_042_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "9s",
              "error_log": "Tool error log",
              "created_at": "2024-12-31T19:52:57.552190"
            }
          },
          {
            "idx": "tool_042_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-14T19:52:57.552196"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_042_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.94
          },
          {
            "target_idx": "agent_042_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.63
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_042_1",
        "target_idx": "agent_042_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-15T19:52:57.552209"
        }
      },
      {
        "source_idx": "agent_042_1",
        "target_idx": "agent_042_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-11T19:52:57.552219"
        }
      }
    ],
    "response": "Final response for query 42",
    "total_tokens": 1532,
    "is_active": true,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.185",
      "destination_ip": "10.0.0.101",
      "user_id": "user_69"
    }
  },
  {
    "session_id": "session_043",
    "timestamp": "2024-12-15T19:52:57.552359",
    "query": "Query example 43",
    "agents": [
      {
        "idx": "agent_043_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "9s",
          "error_log": "",
          "created_at": "2024-12-10T19:52:57.552235",
          "updated_at": "2024-12-21T19:52:57.552237"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_043_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2025-01-01T19:52:57.552245"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_043_1",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.97
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_043_1",
        "target_idx": "agent_043_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-18T19:52:57.552350"
        }
      }
    ],
    "response": "Final response for query 43",
    "total_tokens": 1656,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.135",
      "destination_ip": "10.0.0.4",
      "user_id": "user_9"
    }
  },
  {
    "session_id": "session_044",
    "timestamp": "2024-12-06T19:52:57.552441",
    "query": "Query example 44",
    "agents": [
      {
        "idx": "agent_044_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "7s",
          "error_log": "Sample error message",
          "created_at": "2024-12-03T19:52:57.552380",
          "updated_at": "2024-12-14T19:52:57.552386"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_044_1_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-30T19:52:57.552397"
            }
          },
          {
            "idx": "tool_044_1_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "10s",
              "error_log": "Tool error log",
              "created_at": "2024-12-12T19:52:57.552417"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_044_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.26
          },
          {
            "target_idx": "agent_044_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.61
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_044_1",
        "target_idx": "agent_044_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-05T19:52:57.552435"
        }
      }
    ],
    "response": "Final response for query 44",
    "total_tokens": 1649,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.58",
      "destination_ip": "10.0.0.92",
      "user_id": "user_13"
    }
  },
  {
    "session_id": "session_045",
    "timestamp": "2024-12-15T19:52:57.552521",
    "query": "Query example 45",
    "agents": [
      {
        "idx": "agent_045_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "success",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "",
          "created_at": "2024-12-28T19:52:57.552461",
          "updated_at": "2024-12-15T19:52:57.552468"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_045_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-07T19:52:57.552478"
            }
          },
          {
            "idx": "tool_045_1_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "Tool error log",
              "created_at": "2024-12-29T19:52:57.552488"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_045_1",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.77
          },
          {
            "target_idx": "agent_045_1",
            "relation": "dependency",
            "description": "Relation description 2",
            "weight": 0.7
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_045_1",
        "target_idx": "agent_045_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-31T19:52:57.552512"
        }
      },
      {
        "source_idx": "agent_045_1",
        "target_idx": "agent_045_1",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-19T19:52:57.552518"
        }
      }
    ],
    "response": "Final response for query 45",
    "total_tokens": 2131,
    "is_active": false,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.215",
      "destination_ip": "10.0.0.237",
      "user_id": "user_46"
    }
  },
  {
    "session_id": "session_046",
    "timestamp": "2024-12-09T19:52:57.552607",
    "query": "Query example 46",
    "agents": [
      {
        "idx": "agent_046_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "failure",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "18s",
          "error_log": "Sample error message",
          "created_at": "2024-12-19T19:52:57.552535",
          "updated_at": "2024-12-27T19:52:57.552537"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_046_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-30T19:52:57.552544"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_046_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.64
          },
          {
            "target_idx": "agent_046_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.26
          }
        ]
      },
      {
        "idx": "agent_046_2",
        "name": "Agent 2",
        "type": "scanner",
        "status": "success",
        "images": [
          "https://img.example.com/agent_2.png"
        ],
        "metadata": {
          "execution_time": "2s",
          "error_log": "Sample error message",
          "created_at": "2024-12-31T19:52:57.552562",
          "updated_at": "2024-12-29T19:52:57.552565"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_046_2_1",
            "name": "Tool 1",
            "type": "exploit",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "5s",
              "error_log": "",
              "created_at": "2024-12-26T19:52:57.552572"
            }
          },
          {
            "idx": "tool_046_2_2",
            "name": "Tool 2",
            "type": "exploit",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "1s",
              "error_log": "",
              "created_at": "2024-12-15T19:52:57.552578"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_046_2",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.65
          },
          {
            "target_idx": "agent_046_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.71
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_046_2",
        "target_idx": "agent_046_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-22T19:52:57.552592"
        }
      },
      {
        "source_idx": "agent_046_1",
        "target_idx": "agent_046_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-08T19:52:57.552598"
        }
      },
      {
        "source_idx": "agent_046_1",
        "target_idx": "agent_046_2",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-04T19:52:57.552604"
        }
      }
    ],
    "response": "Final response for query 46",
    "total_tokens": 1955,
    "is_active": true,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.182",
      "destination_ip": "10.0.0.173",
      "user_id": "user_20"
    }
  },
  {
    "session_id": "session_047",
    "timestamp": "2024-12-08T19:52:57.552677",
    "query": "Query example 47",
    "agents": [
      {
        "idx": "agent_047_1",
        "name": "Agent 1",
        "type": "validator",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "1s",
          "error_log": "",
          "created_at": "2024-12-23T19:52:57.552621",
          "updated_at": "2024-12-28T19:52:57.552623"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_047_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-31T19:52:57.552635"
            }
          },
          {
            "idx": "tool_047_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "3s",
              "error_log": "Tool error log",
              "created_at": "2024-12-22T19:52:57.552641"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_047_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.5
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_047_1",
        "target_idx": "agent_047_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-28T19:52:57.552660"
        }
      },
      {
        "source_idx": "agent_047_1",
        "target_idx": "agent_047_1",
        "relation": "derived_from",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-05T19:52:57.552666"
        }
      },
      {
        "source_idx": "agent_047_1",
        "target_idx": "agent_047_1",
        "relation": "dependency",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-13T19:52:57.552672"
        }
      }
    ],
    "response": "Final response for query 47",
    "total_tokens": 2492,
    "is_active": true,
    "metadata": {
      "priority": "medium",
      "source_ip": "192.168.1.1",
      "destination_ip": "10.0.0.77",
      "user_id": "user_76"
    }
  },
  {
    "session_id": "session_048",
    "timestamp": "2024-12-24T19:52:57.552744",
    "query": "Query example 48",
    "agents": [
      {
        "idx": "agent_048_1",
        "name": "Agent 1",
        "type": "exploit",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "12s",
          "error_log": "",
          "created_at": "2024-12-05T19:52:57.552705",
          "updated_at": "2025-01-02T19:52:57.552709"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_048_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "pending",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-22T19:52:57.552719"
            }
          },
          {
            "idx": "tool_048_1_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "success",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-19T19:52:57.552727"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_048_1",
            "relation": "dependency",
            "description": "Relation description 1",
            "weight": 0.74
          },
          {
            "target_idx": "agent_048_1",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.75
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_048_1",
        "target_idx": "agent_048_1",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-17T19:52:57.552741"
        }
      }
    ],
    "response": "Final response for query 48",
    "total_tokens": 2011,
    "is_active": true,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.68",
      "destination_ip": "10.0.0.16",
      "user_id": "user_41"
    }
  },
  {
    "session_id": "session_049",
    "timestamp": "2025-01-01T19:52:57.552889",
    "query": "Query example 49",
    "agents": [
      {
        "idx": "agent_049_1",
        "name": "Agent 1",
        "type": "analyzer",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "15s",
          "error_log": "Sample error message",
          "created_at": "2024-12-06T19:52:57.552756",
          "updated_at": "2024-12-22T19:52:57.552759"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_049_1_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-04T19:52:57.552769"
            }
          },
          {
            "idx": "tool_049_1_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "Tool error log",
              "created_at": "2024-12-25T19:52:57.552784"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_049_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.27
          },
          {
            "target_idx": "agent_049_3",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.98
          }
        ]
      },
      {
        "idx": "agent_049_2",
        "name": "Agent 2",
        "type": "validator",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "1s",
          "error_log": "",
          "created_at": "2025-01-02T19:52:57.552801",
          "updated_at": "2024-12-21T19:52:57.552804"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_049_2_1",
            "name": "Tool 1",
            "type": "handler",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-18T19:52:57.552811"
            }
          },
          {
            "idx": "tool_049_2_2",
            "name": "Tool 2",
            "type": "scanner",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "failure",
            "metadata": {
              "execution_time": "3s",
              "error_log": "",
              "created_at": "2024-12-20T19:52:57.552817"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_049_3",
            "relation": "triggers",
            "description": "Relation description 1",
            "weight": 0.3
          },
          {
            "target_idx": "agent_049_3",
            "relation": "uses",
            "description": "Relation description 2",
            "weight": 0.53
          }
        ]
      },
      {
        "idx": "agent_049_3",
        "name": "Agent 3",
        "type": "analyzer",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_3.png"
        ],
        "metadata": {
          "execution_time": "13s",
          "error_log": "",
          "created_at": "2024-12-08T19:52:57.552837",
          "updated_at": "2024-12-14T19:52:57.552843"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_049_3_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "7s",
              "error_log": "Tool error log",
              "created_at": "2024-12-23T19:52:57.552851"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_049_3",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.96
          },
          {
            "target_idx": "agent_049_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.89
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_049_1",
        "target_idx": "agent_049_3",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2025-01-01T19:52:57.552872"
        }
      },
      {
        "source_idx": "agent_049_1",
        "target_idx": "agent_049_3",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-19T19:52:57.552880"
        }
      },
      {
        "source_idx": "agent_049_2",
        "target_idx": "agent_049_2",
        "relation": "uses",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-05T19:52:57.552886"
        }
      }
    ],
    "response": "Final response for query 49",
    "total_tokens": 1463,
    "is_active": true,
    "metadata": {
      "priority": "low",
      "source_ip": "192.168.1.39",
      "destination_ip": "10.0.0.237",
      "user_id": "user_73"
    }
  },
  {
    "session_id": "session_050",
    "timestamp": "2024-12-29T19:52:57.553005",
    "query": "Query example 50",
    "agents": [
      {
        "idx": "agent_050_1",
        "name": "Agent 1",
        "type": "scanner",
        "status": "pending",
        "images": [
          "https://img.example.com/agent_1.png"
        ],
        "metadata": {
          "execution_time": "11s",
          "error_log": "Sample error message",
          "created_at": "2024-12-13T19:52:57.552905",
          "updated_at": "2025-01-02T19:52:57.552908"
        },
        "output": "Sample output from Agent 1",
        "tools": [
          {
            "idx": "tool_050_1_1",
            "name": "Tool 1",
            "type": "scanner",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "9s",
              "error_log": "",
              "created_at": "2024-12-28T19:52:57.552916"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_050_3",
            "relation": "uses",
            "description": "Relation description 1",
            "weight": 0.43
          },
          {
            "target_idx": "agent_050_3",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.32
          }
        ]
      },
      {
        "idx": "agent_050_2",
        "name": "Agent 2",
        "type": "analyzer",
        "status": "success",
        "images": [],
        "metadata": {
          "execution_time": "16s",
          "error_log": "",
          "created_at": "2024-12-20T19:52:57.552934",
          "updated_at": "2024-12-15T19:52:57.552937"
        },
        "output": "Sample output from Agent 2",
        "tools": [
          {
            "idx": "tool_050_2_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "success",
            "metadata": {
              "execution_time": "8s",
              "error_log": "Tool error log",
              "created_at": "2024-12-15T19:52:57.552946"
            }
          },
          {
            "idx": "tool_050_2_2",
            "name": "Tool 2",
            "type": "handler",
            "input": "Input for tool 2",
            "output": "Output from tool 2",
            "status": "pending",
            "metadata": {
              "execution_time": "10s",
              "error_log": "",
              "created_at": "2024-12-09T19:52:57.552956"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_050_2",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.29
          },
          {
            "target_idx": "agent_050_1",
            "relation": "derived_from",
            "description": "Relation description 2",
            "weight": 0.7
          }
        ]
      },
      {
        "idx": "agent_050_3",
        "name": "Agent 3",
        "type": "validator",
        "status": "pending",
        "images": [],
        "metadata": {
          "execution_time": "10s",
          "error_log": "",
          "created_at": "2025-01-01T19:52:57.552970",
          "updated_at": "2025-01-01T19:52:57.552973"
        },
        "output": "Sample output from Agent 3",
        "tools": [
          {
            "idx": "tool_050_3_1",
            "name": "Tool 1",
            "type": "logger",
            "input": "Input for tool 1",
            "output": "Output from tool 1",
            "status": "failure",
            "metadata": {
              "execution_time": "2s",
              "error_log": "",
              "created_at": "2024-12-05T19:52:57.552983"
            }
          }
        ],
        "connections": [
          {
            "target_idx": "agent_050_1",
            "relation": "derived_from",
            "description": "Relation description 1",
            "weight": 0.66
          }
        ]
      }
    ],
    "edges": [
      {
        "source_idx": "agent_050_1",
        "target_idx": "agent_050_2",
        "relation": "triggers",
        "description": "Edge relation between two agents",
        "metadata": {
          "created_at": "2024-12-06T19:52:57.553000"
        }
      }
    ],
    "response": "Final response for query 50",
    "total_tokens": 1270,
    "is_active": false,
    "metadata": {
      "priority": "critical",
      "source_ip": "192.168.1.103",
      "destination_ip": "10.0.0.80",
      "user_id": "user_5"
    }
  }
]

export default cybersecurity_graph_dummy_data;