import { MovementOption, CameraOption, LightOption } from './types';

export const FACE_LOCK_PROMPT = `Apply persistent face locking with maximum identity stability. Maintain exact facial anatomy (bone structure, jaw contour, cheek volume, nose tip shape, philtrum, lip texture, eyebrow strands, and eye geometry). Lock skin tone, pore detail, and micro-shading. Prevent any identity drift during motion sequences, camera shake, fast movement, or dynamic lighting. Keep consistent hairline shape and hair strand direction. Ultra-realistic DSLR-style sharpness, no distortion, no ‘AI reshaping’, no model swapping.`;

export const MOVEMENTS: MovementOption[] = [
  {
    id: 'custom',
    label: 'Manual / Custom',
    prompt: ''
  },
  {
    id: 'squeeze',
    label: 'Remas Dada & Pantat',
    prompt: 'meremas dada dengan seksi, dan meremas pantat dengan sexy.'
  },
  {
    id: 'squeeze_sexy',
    label: 'remas dada seksi',
    prompt: 'membuka kancing baju  dan memamerkan bra pink,dada padat berisi, memegang dada secara seksi dan menggoda, bahkan meremas secara perlahan dengan seksi.'
  },
  {
    id: 'nungging',
    label: 'Nungging',
    prompt: 'berbalik dan menungging, bergoyang perlahan, ke atas kebawah'
  },
  {
    id: 'nungging_v2',
    label: 'Nungging v2',
    prompt: 'berbalik dan menungging, bergoyang perlahan, ke atas kebawah. sesekali menampar bagian bokong'
  }
];

export const CAMERA_MOTIONS: CameraOption[] = [
  {
    id: 'dolly-in',
    label: '1. Dolly In (Gerakan Maju Halus)',
    prompt: 'Cinematic dolly-in motion toward the [subject], smooth forward camera movement, shallow depth of field, natural lighting, realistic skin texture, stable face detail, ultra-clean motion blur.'
  },
  {
    id: 'dolly-out',
    label: '2. Dolly Out (Menjauh Dengan Elegan)',
    prompt: 'Slow dolly-out camera motion away from the [subject], wide framing reveal, smooth continuous movement, stable facial structure, sharp eyes, natural shadows.'
  },
  {
    id: 'orbit-360',
    label: '3. Orbit 360°',
    prompt: '360-degree orbit camera around the [subject], smooth rotational motion, consistent lighting, no distortion, stable face tracking, high-detail skin and hair.'
  },
  {
    id: 'pan-left',
    label: '4. Slow Pan Left',
    prompt: 'Slow horizontal camera pan to the left across the [subject], subtle motion blur, cinematic framing, DSLR-style clarity, crisp textures.'
  },
  {
    id: 'pan-right',
    label: '5. Slow Pan Right',
    prompt: 'Camera pan to the right, steady slow movement, sharp focus lock on the [subject]’s face, soft background blur, realistic micro-texture.'
  },
  {
    id: 'push-pull',
    label: '6. Push–Pull Zoom (Vertigo Effect)',
    prompt: 'Push-pull zoom motion effect on the [subject], dramatic depth shift, smooth transition, stable facial features, no warping, high realism.'
  },
  {
    id: 'crane-up',
    label: '7. Crane Up (Naik ke Atas)',
    prompt: 'Camera crane-up motion from chest level to overhead view, elegant vertical rise, cinematic shadow transitions, face remains sharp and clean.'
  },
  {
    id: 'crane-down',
    label: '8. Crane Down (Turun Ke Bawah)',
    prompt: 'Camera crane-down motion toward the [subject], gentle descent, smooth pathing, consistent proportions, high-detail eyes & skin.'
  },
  {
    id: 'handheld',
    label: '9. Handheld Cinematic (Getaran Halus)',
    prompt: 'Realistic handheld motion with subtle shake, soft micro-vibration, natural breathing movement, stable subject tracking, film-style texture.'
  },
  {
    id: 'parallax',
    label: '10. Parallax Side Move',
    prompt: 'Sideways parallax camera move past the [subject], foreground blur and background separation, crisp subject focus, deep cinematic look.'
  },
  {
    id: 'combination',
    label: '11. Combination Motion',
    prompt: 'Cinematic camera motion: slow dolly-in + slight orbit around the [subject], soft shallow depth of field, natural lighting, sharp facial details, realistic motion blur, stable proportions, high-resolution DSLR quality.'
  }
];

export const LIGHT_STYLES: LightOption[] = [
  {
    id: 'soft-natural',
    label: '1. Soft Natural Light',
    prompt: 'Soft natural lighting, diffused daylight, clean shadows, even skin illumination, smooth highlights, DSLR look, no harsh contrast.',
    description: 'Cahaya Lembut Alami',
    usage: 'Wajah makin halus, cocok buat close-up orang.'
  },
  {
    id: 'three-point',
    label: '2. Three-Point Lighting',
    prompt: 'Professional three-point lighting: key light soft, fill light gentle, rim light subtle, balanced exposure, crisp facial contours, cinematic depth.',
    description: 'Standar Studio Film',
    usage: 'Hasil sangat rapi, standar industri.'
  },
  {
    id: 'golden-hour',
    label: '3. Golden Hour Warm Glow',
    prompt: 'Golden hour lighting, warm directional sunlight, soft glow on skin, long shadows, natural highlight roll-off, warm cinematic tone.',
    description: 'Cahaya Hangat Matahari Senja',
    usage: 'Efek dramatis, tebal cinematic vibe.'
  },
  {
    id: 'high-key',
    label: '4. High-Key Clean Light',
    prompt: 'High-key lighting, bright and clean exposure, minimal shadow, smooth skin texture, commercial-style clarity, soft color tone.',
    description: 'Terang & Bersih, Minim Bayangan',
    usage: 'Cocok untuk fashion, beauty, skincare.'
  },
  {
    id: 'low-key',
    label: '5. Moody Low-Key Light',
    prompt: 'Low-key cinematic lighting, deep contrast, strong shadow separation, directional key light, rich atmosphere, sharp face contours.',
    description: 'Dramatis & Kontras Tinggi',
    usage: 'Untuk video dramatis, misterius, atau mood gelap.'
  }
];