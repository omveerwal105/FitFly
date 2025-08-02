import React from 'react';

const BMI = () => {
  const progressData = {
    currentWeight: 78, // kg
    goalWeight: 55, // kg
    height: 161, // cm
    bodyFat: 21, // %
    lastUpdated: '2025-08-01',
  };

  const { currentWeight, goalWeight, height, bodyFat, lastUpdated } = progressData;

  // BMI using current weight
  const heightMtr = height / 100;
  const bmiValue = currentWeight / (heightMtr * heightMtr);
  const bmi = Math.round(bmiValue * 10) / 10; // one decimal as number

  // Category + styling
  const getBmiCategory = (bmi) => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'bg-blue-100 text-blue-800' };
    if (bmi >= 18.5 && bmi < 25) return { label: 'Normal', color: 'bg-green-100 text-green-800' };
    if (bmi >= 25 && bmi < 30) return { label: 'Overweight', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Obese', color: 'bg-red-100 text-red-800' };
  };

  const bmiCategory = getBmiCategory(bmi);

  const isLosing = currentWeight > goalWeight;
  const diff = Math.abs(currentWeight - goalWeight);
  const actionText = isLosing
    ? `You need to lose ${diff} kg`
    : `You need to gain ${diff} kg`;

  // progress towards goal (percent achieved)
  const rawProgress = isLosing
    ? ((currentWeight - goalWeight) / (currentWeight || 1)) * 100
    : ((goalWeight - currentWeight) / (goalWeight || 1)) * 100;

  const progressPercent = Math.min(100, Math.max(0, rawProgress));
  const achievedPercent = 100 - progressPercent;

  return (
    <div className="max-w-xl mx-auto p-4 space-y-6 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Body Progress</h1>
        <p className="text-sm text-gray-500">
          Last Updated: {new Date(lastUpdated).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Current Weight */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-lg font-medium mb-1">Current Weight</h2>
          <p className="text-3xl font-bold text-blue-600">{currentWeight} kg</p>
        </div>

        {/* Goal Weight */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-lg font-medium mb-1">Goal Weight</h2>
          <p className="text-3xl font-bold text-indigo-600">{goalWeight} kg</p>
        </div>

        {/* BMI */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h2 className="text-lg font-medium">BMI</h2>
              <p className="text-2xl font-bold">{bmi}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${bmiCategory.color}`}
              aria-label={`BMI category: ${bmiCategory.label}`}
            >
              {bmiCategory.label}
            </span>
          </div>
          <p className="text-xs text-gray-500">Height: {height} cm</p>
        </div>

        {/* Body Fat */}
        <div className="bg-white shadow-md rounded-2xl p-5">
          <h2 className="text-lg font-medium mb-1">Body Fat</h2>
          <p className="text-3xl font-bold">{bodyFat}%</p>
        </div>
      </div>

      {/* Progress */}
      <div className="bg-white shadow-md rounded-2xl p-5">
        <div className="flex justify-between mb-2">
          <div>
            <h2 className="text-lg font-medium mb-1">Progress toward goal</h2>
            <p className="text-sm text-gray-600">{actionText}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-semibold">{achievedPercent.toFixed(1)}% achieved</p>
          </div>
        </div>

        {/* Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: `${achievedPercent}%`,
              background:
                bmiCategory.label === 'Normal'
                  ? 'linear-gradient(to right, #10b981, #6ee7b7)'
                  : 'linear-gradient(to right, #6366f1, #a5b4fc)',
              transition: 'width 0.3s ease',
            }}
          ></div>
        </div>
        <div className="mt-1 text-xs text-gray-500">
          {progressPercent.toFixed(1)}% left to goal
        </div>
      </div>
    </div>
  );
};

export default BMI;
