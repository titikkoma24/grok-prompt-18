export interface PromptOption {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface MovementOption {
  id: string;
  label: string;
  prompt: string;
}

export interface CameraOption {
  id: string;
  label: string;
  prompt: string;
}

export interface LightOption {
  id: string;
  label: string;
  prompt: string;
  description: string;
  usage: string;
}