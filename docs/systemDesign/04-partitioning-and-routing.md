
# 04. Partitioning & Routing (Deep Dive, Generic)

## Key-Range Partitions
Ordered ranges assigned to shards.

Used in:
- Google Bigtable (tablet splits)
- HBase regions
- Spanner directory splits

Strengths: range scans, locality.  
Weakness: hotspots on sequential keys.

---

## Fixed Partitions
Static modulo-based partitioning.

Used in:
- Dynamo-style hash rings
- Cassandra vnodes
- Redis Cluster

Strengths: simple routing.  
Weakness: expensive rebalancing.
