<template>
    <div id="app">
        <v-app class="green lighten-4">
            <page-toolbar/>
            <main>
                <v-container fluid>
                    <router-view/>
                </v-container>
            </main>
        </v-app>
    </div>
</template>

<script>
import PageToolbar from '@/components/toolbar';
import './assets/style.css';

export default {
    name: 'app',
    components: { PageToolbar }
}
</script>
