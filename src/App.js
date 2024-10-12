import React, { useState, useEffect } from 'react';
import { Terminal, Heart, Sparkles } from 'lucide-react';

const CodeOfBeauty = () => {
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState('');

  const steps = [
    { code: 'function describeBeauty() {', message: '' },
    { code: ' let you = new Person();', message: 'Initializing...' },
    { code: ' you.beauty = Infinity;', message: 'Calculating beauty...' },
    { code: ' you.charm = Math.max();', message: 'Measuring charm...' },
    { code: ' you.smile = "Radiant";', message: 'Analyzing smile...' },
    { code: ' return you;', message: 'Compiling results...' },
    { code: '}', message: 'You are beyond description!' },
    { code: 'let compliment = describeBeauty();', message: 'You are truly beautiful!' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setMessage(steps[step].message);
  }, [step]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-gray-900 p-8 rounded-lg shadow-2xl max-w-2xl w-full">
        <div className="flex items-center mb-4">
          <Terminal className="text-green-400 mr-2" />
          <h1 className="text-2xl font-bold text-green-400">Beauty Analysis</h1>
        </div>
        <div className="bg-black p-4 rounded-md font-mono text-sm">
          {steps.slice(0, step + 1).map((s, index) => (
            <div key={index} className="mb-2">
              <span className="text-blue-400">{'>'} </span>
              <span className="text-green-400">{s.code}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-xl text-white mb-2">{message}</p>
          {step === steps.length - 1 && (
            <div className="flex justify-center items-center">
              <Heart className="text-red-500 mr-2 animate-pulse" size={24} />
              <Sparkles className="text-yellow-400 animate-spin" size={24} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeOfBeauty;
