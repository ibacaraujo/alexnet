import * as tf from '@tensorflow/tfjs';

// Useful example of how create our own data manager class
import {MnistData} from './data';

// Helper class for drawing loss graphs and MNIST images
import * as ui from './ui';

// Create a sequential neural network model for the AlexNet
const alexnet_model = tf.sequential();

// The AlexNet architecture has 5 convolutional layers
// The convolutional layers are followed by pooling layers

// The first convolutional layer
model.add(tf.layers.conv2d({
  inputShape: [28,28,1],
  kernelSize: 11,
  filters: 96,
  strides: 4,
  activation: 'relu',
  kernelInitializer: 'varianceScaling'
}));

// MaxPooling layer
model.add(tf.layers.maxPooling2d({
  poolSize: [3,3],
  strides: [2,2]
}));

// The second convolutional layer
model.add(tf.layers.conv2d({
  kernelSize: 5,
  filters: 256,
  strides: 4,
  activation: 'relu',
  kernelInitializer: 'varianceScaling'
}));

// MaxPooling layer
model.add(tf.layers.maxPooling2d({
  poolSize: [3,3],
  strides: [2,2]
}));

// The third convolutional layer
model.add(tf.layers.conv2d({
  kernelSize: 3,
  filters: 384,
  strides: 4,
  activation: 'relu',
  kernelInitializer: 'varianceScaling'
}));

// The fourth convolutional layer
model.add(tf.layers.conv2d({
  kernelSize: 3,
  filters: 384,
  strides: 4,
  activation: 'relu',
  kernelInitializer: 'varianceScaling'
}));
