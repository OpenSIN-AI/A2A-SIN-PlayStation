# A2A-SIN-PlayStation Boundaries

## Role
`A2A-SIN-PlayStation` owns PlayStation Network messaging integration, PSN workflows, and PlayStation-specific contracts.

## This repo should own
- PlayStation Network messaging routing, coordination, and automation flows
- PlayStation evidence, recovery, auth, and session handling
- PlayStation contracts used by downstream automation agents
- runbooks tied to PlayStation platform interaction and monitoring

## This repo must not own
- unrelated gaming or social platform logic
- organization SSOT docs or architecture canon
- downstream business logic unrelated to PlayStation ownership

## Hard rules
- Keep changes scoped to PlayStation messaging integration and monitoring.
- Move non-PlayStation behavior back to the repos that own it.
- Keep reusable contracts focused on console chat coordination and monitoring.
