import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Palette, Code, Terminal as TerminalIcon, ChevronRight } from 'lucide-react';

type Demo = 'api' | 'theme' | 'code';

export const PlaygroundSection = () => {
  const [activeDemo, setActiveDemo] = useState<Demo>('api');
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [accentColor, setAccentColor] = useState('cyan');

  const handleApiTest = async () => {
    setIsLoading(true);
    setApiResponse(null);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    setApiResponse(JSON.stringify({
      status: 200,
      message: "API is operational",
      timestamp: new Date().toISOString(),
      data: {
        endpoint: "/api/v1/status",
        latency: "23ms",
        region: "us-east-1"
      }
    }, null, 2));
    setIsLoading(false);
  };

  const codeSnippet = `// Real-time data fetching hook
const useRealtimeData = <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    const ws = new WebSocket(endpoint);
    
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
      setStatus('connected');
    };

    ws.onerror = () => setStatus('error');
    
    return () => ws.close();
  }, [endpoint]);

  return { data, status };
};`;

  const colors = [
    { name: 'cyan', class: 'bg-cyan-500' },
    { name: 'purple', class: 'bg-purple-500' },
    { name: 'green', class: 'bg-green-500' },
    { name: 'orange', class: 'bg-orange-500' },
  ];

  return (
    <section id="playground" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 glass-card text-sm font-mono text-primary mb-6">
            // Interactive Lab
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Experiments</span> & Demos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Try out some interactive demos showcasing different capabilities.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Demo Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {[
              { id: 'api' as Demo, icon: Play, label: 'API Tester' },
              { id: 'theme' as Demo, icon: Palette, label: 'Theme Switcher' },
              { id: 'code' as Demo, icon: Code, label: 'Code Preview' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveDemo(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                  activeDemo === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'glass-card hover:bg-secondary'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Demo Content */}
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 md:p-8"
          >
            {activeDemo === 'api' && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-2 flex-1 bg-secondary rounded-lg px-4 py-3">
                    <span className="text-green-400 font-mono text-sm">GET</span>
                    <span className="text-muted-foreground font-mono text-sm">/api/v1/status</span>
                  </div>
                  <button
                    onClick={handleApiTest}
                    disabled={isLoading}
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    ) : (
                      <Play className="w-4 h-4" />
                    )}
                    Run
                  </button>
                </div>

                <div className="bg-background/50 rounded-lg p-4 font-mono text-sm min-h-[200px]">
                  <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                    <TerminalIcon className="w-4 h-4" />
                    Response
                  </div>
                  {apiResponse ? (
                    <pre className="text-green-400 whitespace-pre-wrap">{apiResponse}</pre>
                  ) : (
                    <span className="text-muted-foreground">
                      Click "Run" to test the API endpoint...
                    </span>
                  )}
                </div>
              </div>
            )}

            {activeDemo === 'theme' && (
              <div>
                <h3 className="text-lg font-semibold mb-4">Select Accent Color</h3>
                <div className="flex gap-4 mb-8">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setAccentColor(color.name)}
                      className={`w-12 h-12 rounded-xl ${color.class} transition-transform ${
                        accentColor === color.name ? 'scale-110 ring-2 ring-white ring-offset-2 ring-offset-card' : 'hover:scale-105'
                      }`}
                    />
                  ))}
                </div>

                <div
                  className={`p-6 rounded-xl transition-all duration-500 ${
                    accentColor === 'cyan' ? 'bg-cyan-500/20 border border-cyan-500/30' :
                    accentColor === 'purple' ? 'bg-purple-500/20 border border-purple-500/30' :
                    accentColor === 'green' ? 'bg-green-500/20 border border-green-500/30' :
                    'bg-orange-500/20 border border-orange-500/30'
                  }`}
                >
                  <h4 className="text-xl font-bold mb-2">Preview Card</h4>
                  <p className="text-muted-foreground mb-4">
                    This component reacts to your color selection in real-time.
                  </p>
                  <button
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      accentColor === 'cyan' ? 'bg-cyan-500 text-white' :
                      accentColor === 'purple' ? 'bg-purple-500 text-white' :
                      accentColor === 'green' ? 'bg-green-500 text-white' :
                      'bg-orange-500 text-white'
                    }`}
                  >
                    Action Button
                  </button>
                </div>
              </div>
            )}

            {activeDemo === 'code' && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-sm font-mono text-muted-foreground">useRealtimeData.ts</span>
                </div>
                <pre className="bg-background/50 rounded-lg p-4 overflow-x-auto">
                  <code className="text-sm font-mono">
                    {codeSnippet.split('\n').map((line, i) => (
                      <div key={i} className="flex">
                        <span className="text-muted-foreground/50 select-none w-8 text-right mr-4">
                          {i + 1}
                        </span>
                        <span className="text-foreground">
                          {line.includes('//') ? (
                            <span className="text-green-500">{line}</span>
                          ) : line.includes('const') || line.includes('return') ? (
                            <span>
                              <span className="text-purple-400">{line.split(' ')[0]}</span>
                              {' '}{line.slice(line.indexOf(' '))}
                            </span>
                          ) : (
                            line
                          )}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
