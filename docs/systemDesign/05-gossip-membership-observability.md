
# 05. Gossip, Membership & Observability (Deep Dive, Generic)

## Gossip Dissemination
Decentralized membership propagation.

Used in:
- Cassandra gossip
- Serf/Consul gossip
- Dynamo-style membership

---

## Follower Reads
Serve reads from replicas.

Used in:
- DynamoDB Global Tables
- Spanner read replicas
- MongoDB secondaries

---

## Idempotent Receiver
Consume duplicates safely.

Used in:
- Kafka exactly-once processing
- Debezium CDC
- Stripe webhook handlers

---

## State Watch
Watch keys for real-time changes.

Used in:
- etcd watch API
- ZooKeeper watchers
- Consul KV watch
