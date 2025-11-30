
# 02. Consensus & Coordination (Deep Dive, Generic)

## Paxos
A foundational consensus protocol ensuring agreement among unreliable nodes.

Used in:  
- Google Spanner’s TrueTime + Paxos  
- Amazon DynamoDB internal metadata coordination  
- Kafka controller elections (Zookeeper-based Paxos-like behavior)

---

## Two-Phase Commit (2PC)
Atomic commit protocol across multiple systems.

Used in:
- Classical RDBMS distributed transactions
- XA transactions

Avoided in modern microservices in favor of Sagas.

---

## Quorum
Ensures strong consistency by requiring majority agreement.

Used in: Cassandra (tunables), DynamoDB, MongoDB write concerns.

---

## Leader & Followers
Single-writer, multi-replica model.

Used in:
- Raft (etcd, Consul, CockroachDB)
- Kafka partition leadership
- MongoDB replica sets

---

## Emergent Leader
Local-election-based leader logic.

Used in:
- Redis Sentinel
- Kubernetes controller elections
- ZooKeeper failover

---

## Clock-Bound Wait
Mutation or read waits until a timestamp condition.

Used in:
- Spanner commit wait
- HLC-based causal reads
