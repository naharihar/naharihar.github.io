
# 03. Logs, Replication & Request Processing (Deep Dive, Generic)

## Replicated Log
A deterministic, ordered log replicated across nodes.

Used in:
- Raft (etcd, Consul)
- Kafka partitions
- MongoDB Oplog
- Amazon Aurora storage layer

---

## Segmented Log
Divide logs into segments for compaction, archiving.

Used in:
- Kafka segments
- ElasticSearch translog
- Kinesis shards

---

## Request Pipeline
Multi-stage request processing.

Used in:
- Nginx worker pipelines
- AWS API Gateway internals
- Search indexing (Lucene)

---

## Request Batch
Combines many operations into one write.

Used in:
- Cassandra batch operations
- Bigtable mutation batches
- DynamoDB batch writes

---

## Singular Update Queue
Serializes updates per key.

Used in:
- DynamoDB partition-level serialization
- MongoDB document-level locking (legacy)
- Redis single-threaded atomic ops

---

## Single Socket Channel
Multiplex many logical streams over one connection.

Used in:
- HTTP/2 multiplexing
- gRPC streams
- WebSockets
