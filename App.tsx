import React, { useState, useEffect } from 'react';
import { Copy, RefreshCw, Video, Sun, CheckSquare, Edit3, User, Zap } from 'lucide-react';
import { CAMERA_MOTIONS, FACE_LOCK_PROMPT, LIGHT_STYLES, MOVEMENTS } from './constants';
import { CameraOption, LightOption, MovementOption } from './types';

const App: React.FC = () => {
  // State
  const [subject, setSubject] = useState<string>("beautiful model");
  const [selectedMovement, setSelectedMovement] = useState<string>(MOVEMENTS[0].prompt);
  const [selectedCamera, setSelectedCamera] = useState<CameraOption | null>(null);
  const [selectedLight, setSelectedLight] = useState<LightOption | null>(null);
  const [isFaceLockEnabled, setIsFaceLockEnabled] = useState<boolean>(true);
  const [finalPrompt, setFinalPrompt] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  // Generate prompt whenever dependencies change
  useEffect(() => {
    const parts: string[] = [];

    // 1. Subject & Movement
    // If movement is present, combine subject with movement. 
    // Otherwise just use subject.
    let baseAction = "";
    if (selectedMovement.trim()) {
      baseAction = `${subject} doing ${selectedMovement}`;
    } else {
      baseAction = `${subject}`;
    }
    parts.push(baseAction);

    // 2. Camera Motion
    if (selectedCamera) {
      // Replace [subject] placeholder with actual subject
      const camPrompt = selectedCamera.prompt.replace(/\[subject\]/g, subject);
      parts.push(camPrompt);
    }

    // 3. Lighting
    if (selectedLight) {
      parts.push(selectedLight.prompt);
    }

    // 4. Face Lock
    if (isFaceLockEnabled) {
      parts.push(FACE_LOCK_PROMPT);
    }

    // Join with double newlines for clarity or comma space
    setFinalPrompt(parts.join(",\n\n"));

  }, [subject, selectedMovement, selectedCamera, selectedLight, isFaceLockEnabled]);

  const handleCopy = () => {
    navigator.clipboard.writeText(finalPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubject("beautiful model");
    setSelectedMovement(MOVEMENTS[0].prompt);
    setSelectedCamera(null);
    setSelectedLight(null);
    setIsFaceLockEnabled(true);
  };

  const handleMovementSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const found = MOVEMENTS.find(m => m.id === val);
    if (found) {
      setSelectedMovement(found.prompt);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-100 font-sans selection:bg-purple-500 selection:text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="mb-10 text-center border-b border-gray-800 pb-6">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text mb-2">
            GROK PROMPT CREATOR 18+
          </h1>
          <p className="text-gray-400 text-sm tracking-widest uppercase">
            Cinematic Motion & Lighting Generator
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Subject Input */}
            <section className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <User size={20} />
                <h2 className="font-semibold text-lg uppercase tracking-wide">Subject (Subjek)</h2>
              </div>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all placeholder-gray-500"
                placeholder="e.g., A stunning woman, model name..."
              />
            </section>

            {/* Movement Section */}
            <section className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-purple-400">
                <Edit3 size={20} />
                <h2 className="font-semibold text-lg uppercase tracking-wide">Movement (Gerakan)</h2>
              </div>
              
              <div className="flex flex-col gap-3">
                 <div className="relative">
                  <select 
                    className="w-full appearance-none bg-gray-900 border border-gray-600 text-gray-300 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-gray-900 focus:border-purple-500 cursor-pointer"
                    onChange={handleMovementSelect}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a Preset or Type Below...</option>
                    {MOVEMENTS.map(m => (
                      <option key={m.id} value={m.id}>{m.label}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>

                <textarea
                  value={selectedMovement}
                  onChange={(e) => setSelectedMovement(e.target.value)}
                  className="w-full h-24 bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all text-sm font-mono"
                  placeholder="Type manual movement here or select from above..."
                />
              </div>
            </section>

            {/* Camera Motion Section */}
            <section className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-blue-400">
                <Video size={20} />
                <h2 className="font-semibold text-lg uppercase tracking-wide">Camera Motion</h2>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <select 
                  className="w-full bg-gray-900 border border-gray-600 text-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 cursor-pointer"
                  onChange={(e) => {
                    const found = CAMERA_MOTIONS.find(c => c.id === e.target.value);
                    setSelectedCamera(found || null);
                  }}
                  value={selectedCamera?.id || ""}
                >
                  <option value="">Select Camera Motion...</option>
                  {CAMERA_MOTIONS.map(cam => (
                    <option key={cam.id} value={cam.id}>{cam.label}</option>
                  ))}
                </select>
                {selectedCamera && (
                   <div className="mt-2 p-3 bg-blue-900/20 border border-blue-800/50 rounded text-xs text-blue-200">
                      <strong>Preview: </strong> {selectedCamera.prompt}
                   </div>
                )}
              </div>
            </section>

            {/* Light Style Section */}
            <section className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4 text-yellow-400">
                <Sun size={20} />
                <h2 className="font-semibold text-lg uppercase tracking-wide">Light Style</h2>
              </div>
              <div className="space-y-4">
                 <select 
                  className="w-full bg-gray-900 border border-gray-600 text-gray-300 p-3 rounded-lg focus:outline-none focus:border-yellow-500 cursor-pointer"
                  onChange={(e) => {
                    const found = LIGHT_STYLES.find(l => l.id === e.target.value);
                    setSelectedLight(found || null);
                  }}
                  value={selectedLight?.id || ""}
                >
                  <option value="">Select Lighting...</option>
                  {LIGHT_STYLES.map(light => (
                    <option key={light.id} value={light.id}>{light.label}</option>
                  ))}
                </select>

                {selectedLight && (
                  <div className="p-4 bg-gray-900 rounded-lg border border-gray-700">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-yellow-400 font-bold">{selectedLight.description}</h4>
                    </div>
                    <p className="text-gray-400 text-sm mb-2 italic">"{selectedLight.prompt}"</p>
                    <div className="text-xs text-gray-500 border-t border-gray-800 pt-2 mt-2">
                      <span className="text-gray-300">Kegunaan:</span> {selectedLight.usage}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Face Lock */}
            <section className="bg-gray-800/50 p-4 rounded-xl border border-green-900/50 shadow-lg backdrop-blur-sm hover:border-green-600/50 transition-colors cursor-pointer" onClick={() => setIsFaceLockEnabled(!isFaceLockEnabled)}>
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${isFaceLockEnabled ? 'bg-green-500 text-black' : 'bg-gray-700 text-gray-400'}`}>
                   {isFaceLockEnabled ? <CheckSquare size={24} /> : <div className="w-6 h-6 border-2 border-gray-400 rounded bg-transparent" />}
                </div>
                <div>
                   <h3 className="font-bold text-gray-200">Face Lock Stability</h3>
                   <p className="text-xs text-gray-400">Prevent identity drift & maintain anatomy</p>
                </div>
              </div>
            </section>

          </div>

          {/* Output Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-8 space-y-6">
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    Generated Prompt
                  </h2>
                  <div className="flex gap-2">
                     <button 
                      onClick={handleReset}
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                      title="Reset"
                    >
                      <RefreshCw size={18} />
                    </button>
                  </div>
                </div>

                <textarea
                  className="w-full h-[400px] bg-black/40 border border-gray-600 rounded-xl p-4 text-gray-300 font-mono text-sm focus:ring-1 focus:ring-purple-500 outline-none resize-none leading-relaxed"
                  value={finalPrompt}
                  readOnly
                ></textarea>

                <button
                  onClick={handleCopy}
                  className={`mt-4 w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 ${
                    copied 
                      ? 'bg-green-600 text-white shadow-[0_0_15px_rgba(34,197,94,0.5)]' 
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-lg'
                  }`}
                >
                  {copied ? (
                    <>
                      <CheckSquare size={24} />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy size={24} />
                      COPY TO CLIPBOARD
                    </>
                  )}
                </button>
              </div>

              {/* Info Box */}
              <div className="p-4 rounded-lg bg-gray-900 border border-gray-800 text-xs text-gray-500">
                <p><strong>Note:</strong> This tool generates text prompts only. Use responsibly within the guidelines of your AI generator.</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;