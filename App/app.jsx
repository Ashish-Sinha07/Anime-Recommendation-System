import React, { useState } from 'react';
import { Activity, Users, Zap, Database, CheckCircle, AlertCircle } from 'lucide-react';

const ProductionRecommenderDashboard = () => {
  const [activeTab, setActiveTab] = useState('architecture');
  
  const architectureComponents = [
    {
      name: "Data Ingestion Layer",
      description: "Real-time streaming of user interactions via Kafka/Kinesis",
      tech: "Apache Kafka, AWS Kinesis, Redis",
      status: "critical"
    },
    {
      name: "Feature Store",
      description: "Centralized feature storage with low-latency access",
      tech: "Feast, Redis, DynamoDB",
      status: "critical"
    },
    {
      name: "Model Serving",
      description: "Scalable model inference with A/B testing",
      tech: "TensorFlow Serving, Seldon, Ray Serve",
      status: "critical"
    },
    {
      name: "Caching Layer",
      description: "Pre-computed recommendations for fast retrieval",
      tech: "Redis, Memcached, CDN",
      status: "important"
    }
  ];

  const icons = [Database, Zap, Activity, CheckCircle];

  const mlPipeline = [
    {
      stage: "Batch Training",
      frequency: "Daily",
      description: "Train collaborative filtering models on full dataset",
      metrics: ["RMSE", "MAP@10", "Coverage"]
    },
    {
      stage: "Online Learning",
      frequency: "Real-time",
      description: "Incremental updates based on recent interactions",
      metrics: ["Latency", "Throughput", "Drift Detection"]
    },
    {
      stage: "A/B Testing",
      frequency: "Continuous",
      description: "Compare model variants with multi-armed bandits",
      metrics: ["CTR", "Engagement", "Revenue"]
    },
    {
      stage: "Model Monitoring",
      frequency: "Real-time",
      description: "Track model performance and data quality",
      metrics: ["Prediction Drift", "Data Quality", "Latency"]
    }
  ];

  const performanceMetrics = {
    latency: {
      p50: "12ms",
      p95: "45ms",
      p99: "120ms"
    },
    throughput: "50,000 req/s",
    availability: "99.95%",
    cache_hit: "85%"
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-gray-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Production Anime Recommender System</h1>
          <p className="text-purple-100">Scalable, Real-time, ML-powered Architecture</p>
        </div>

        <div className="flex border-b">
          {['architecture', 'pipeline', 'performance'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === tab
                  ? 'border-b-2 border-purple-600 text-purple-600'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="p-6">
          {activeTab === 'architecture' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">System Architecture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {architectureComponents.map((component, idx) => {
                  const Icon = icons[idx];
                  return (
                    <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          component.status === 'critical' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg mb-1">{component.name}</h3>
                          <p className="text-gray-600 text-sm mb-2">{component.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {component.tech.split(', ').map((tech, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Key Design Decisions
                </h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• <strong>Hybrid Serving:</strong> Pre-computed batch recommendations (90%) + real-time personalization (10%)</li>
                  <li>• <strong>Fallback Strategy:</strong> Popularity-based → Content-based → Random (with tracking)</li>
                  <li>• <strong>Data Pipeline:</strong> Lambda architecture (batch + streaming) for training data</li>
                  <li>• <strong>Model Versioning:</strong> Shadow mode deployment with gradual traffic ramp-up</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'pipeline' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">ML Pipeline</h2>
              <div className="space-y-4">
                {mlPipeline.map((stage, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-lg">{stage.stage}</h3>
                        <p className="text-gray-600 text-sm">{stage.description}</p>
                      </div>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                        {stage.frequency}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stage.metrics.map((metric, i) => (
                        <span key={i} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Training Schedule</h3>
                <div className="space-y-2 text-sm text-green-800">
                  <div className="flex justify-between">
                    <span>Full Model Retrain:</span>
                    <span className="font-medium">Daily at 2 AM UTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Incremental Updates:</span>
                    <span className="font-medium">Every 15 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>A/B Test Evaluation:</span>
                    <span className="font-medium">Hourly</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'performance' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Performance Metrics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-gray-700">Latency (SLA: p99 &lt; 150ms)</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">p50:</span>
                      <span className="font-mono font-medium text-green-600">{performanceMetrics.latency.p50}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">p95:</span>
                      <span className="font-mono font-medium text-green-600">{performanceMetrics.latency.p95}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">p99:</span>
                      <span className="font-mono font-medium text-green-600">{performanceMetrics.latency.p99}</span>
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3 text-gray-700">System Health</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Throughput:</span>
                      <span className="font-mono font-medium">{performanceMetrics.throughput}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Availability:</span>
                      <span className="font-mono font-medium text-green-600">{performanceMetrics.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cache Hit Rate:</span>
                      <span className="font-mono font-medium text-green-600">{performanceMetrics.cache_hit}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold mb-3 text-gray-700">Business Metrics (Last 30 Days)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-purple-50 rounded">
                    <div className="text-2xl font-bold text-purple-600">+23%</div>
                    <div className="text-sm text-gray-600">CTR Increase</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded">
                    <div className="text-2xl font-bold text-blue-600">+18%</div>
                    <div className="text-sm text-gray-600">Watch Time</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded">
                    <div className="text-2xl font-bold text-green-600">+31%</div>
                    <div className="text-sm text-gray-600">User Retention</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded">
                    <div className="text-2xl font-bold text-orange-600">-12%</div>
                    <div className="text-sm text-gray-600">Churn Rate</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 p-4 bg-white rounded-lg shadow text-center text-sm text-gray-600">
        <p>🚀 Powered by: TensorFlow + PyTorch + Redis + Kubernetes + AWS</p>
      </div>
    </div>
  );
};

export default ProductionRecommenderDashboard;