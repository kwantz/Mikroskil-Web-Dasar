<template>
    <div id="app">
        <v-app>
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

export default {
    name: 'app',
    components: { PageToolbar }
}
</script>
