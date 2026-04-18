# Agent: A2A-SIN-PlayStation

**Team:** OpenSIN-AI
**Protocol:** A2A (Agent-to-Agent)
**Status:** Active
**Repository:** https://github.com/OpenSIN-AI/A2A-SIN-PlayStation

## Capabilities

A2A agent for PlayStation integration within the OpenSIN ecosystem.

## Communication

- **Input:** A2A messages from orchestrator
- **Output:** A2A messages to other agents
- **MCP:** Standard OpenSIN MCP servers

## Security

- All operations logged to the approved artifact storage surface
- Requires authorization token
- Guardrails enforced on all inputs/outputs

## Setup

```bash
git clone https://github.com/OpenSIN-AI/A2A-SIN-PlayStation.git
cd A2A-SIN-PlayStation
bun install
bun start
```

## Boundary Guidance

When modifying this repo:

- Prefer PlayStation messaging integration and monitoring work.
- Do not turn this repo into a generic console bucket.
- Do not redefine organization docs, architecture, or runtime canon here.
- Move non-PlayStation behavior back to the repos that own those surfaces.

## License

Apache-2.0
